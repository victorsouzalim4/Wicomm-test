# ADR-0007 — Padronização de código com ESLint e Prettier

- **Status:** Substituído pelo [ADR-0011](0011-linter-oxlint.md) na parte do linter (o Prettier continua valendo)
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 1 — Definir a stack](../roadmap/etapa-01-stack/README.md)

## Contexto

O critério "Qualidade do código" pede código organizado, nomes claros e "nada de código repetido ou sobrando". Ferramentas automáticas pegam boa parte disso (imports e variáveis sem uso, regras dos hooks do React) e deixam a formatação igual em todos os arquivos.

## Opções consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| Nenhuma ferramenta | Nada para configurar | Formatação inconsistente e sobras passam despercebidas |
| Biome | Uma ferramenta só, muito rápida | Suporte menor a plugins (React Hooks, acessibilidade, ordenação de classes do Tailwind) |
| **ESLint + Prettier** | Padrão do mercado. O template do Vite já traz o ESLint. Plugins para React, acessibilidade e Tailwind. | Duas ferramentas para configurar |

## Decisão

Usar **ESLint** para encontrar problemas no código e **Prettier** para a formatação, com:

- `eslint-config-prettier`, para o ESLint não conflitar com o Prettier;
- `prettier-plugin-tailwindcss`, que ordena as classes do Tailwind sempre do mesmo jeito.

## Consequências

- Scripts `npm run lint` e `npm run format` no `package.json`.
- As classes do Tailwind ficam sempre na mesma ordem, o que deixa os diffs menores e mais fáceis de revisar.
- **Sugestão:** adicionar o `eslint-plugin-jsx-a11y`, que aponta problemas de acessibilidade no JSX (imagem sem `alt`, botão sem texto). Ajuda no critério "HTML semântico e acessibilidade".
