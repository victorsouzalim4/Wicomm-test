# ADR-0002 — React para a interface e Tailwind para o estilo

- **Status:** Aceito
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 1 — Definir a stack](../roadmap/etapa-01-stack/README.md)

## Contexto

O teste permite escolher:

- **Estilo:** CSS puro, Sass ou Tailwind (só um dos três)
- **Comportamento:** JavaScript puro ou React

Outros frameworks (Vue, Angular, Svelte, Bootstrap etc.) estão vetados. A página precisa de partes com estado e interação: carrinho, mini cart abrindo e atualizando, menus e carrosséis. O critério "Qualidade do código" pede componentes reaproveitáveis e nada de código repetido.

## Opções consideradas

### Comportamento

| Opção | Prós | Contras |
| --- | --- | --- |
| JavaScript puro | Sem dependências, bundle mínimo | Atualizar a tela a cada mudança do carrinho fica manual e repetitivo. Reaproveitar componentes é mais trabalhoso. |
| **React** | Componentes reaproveitáveis, a tela acompanha o estado sozinha, Context para o carrinho | Bundle um pouco maior que o JS puro |

### Estilo

| Opção | Prós | Contras |
| --- | --- | --- |
| CSS puro | Sem dependências | Sem um sistema de tokens pronto. É fácil acumular CSS repetido ou sobrando. |
| Sass | Variáveis, mixins, organização por arquivo | Mais um arquivo por componente, e o CSS que não é usado continua no bundle |
| **Tailwind** | Tokens do Figma viram classes (`bg-primary`, `text-heading`). Breakpoints prontos (`md:`, `lg:`). Só as classes usadas vão para o CSS final. O estilo fica junto do componente. | O JSX fica cheio de classes. Variações de componente precisam de um padrão para não virar repetição. |

## Decisão

Usar **React** para a interface e **Tailwind CSS** para o estilo.

## Consequências

- Os tokens do Figma (cores, fontes, espaçamentos, breakpoints) ficam centralizados na configuração do tema do Tailwind. Nenhum valor solto, como `text-[#1a2b3c]`, entra nos componentes.
- O reaproveitamento acontece por **componente React**, não por classe CSS. Se um conjunto de classes se repete, vira componente. O `@apply` fica só para casos raros.
- Variações de componente (por exemplo, `Button` primário ou secundário) ficam num objeto de classes por variante dentro do próprio componente, sem duplicar JSX.
- O Prettier ganha o plugin `prettier-plugin-tailwindcss`, que ordena as classes automaticamente e deixa os diffs mais limpos.
- O mobile-first fica natural: a classe sem prefixo vale para o celular, e `md:`/`lg:` ajustam as telas maiores.
- As partes do roadmap que citavam Sass precisam ser atualizadas.
