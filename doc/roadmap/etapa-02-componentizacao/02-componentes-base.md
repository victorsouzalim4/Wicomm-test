# 2.2 — Componentes base (UI)

## Objetivo

Definir as peças pequenas e genéricas que o resto da página usa. Elas não conhecem regra de negócio.

## Candidatos

| Componente | Responsabilidade | Observações |
| --- | --- | --- |
| `Container` | Largura máxima e padding lateral da página | Garante o alinhamento entre as seções |
| `Button` | Botão com variantes (`primary`, `secondary`, `icon`) | Sempre `<button>` ou `<a>`, nunca `<div>` clicável |
| `Icon` | Renderiza ícones SVG | Decorativo: `aria-hidden`. Sozinho em botão: o botão leva `aria-label`. |
| `SectionTitle` | Título padrão das seções | Respeitar a hierarquia de `h1`/`h2`/`h3` |
| `Price` | Formata e exibe o preço (de/por, parcelamento) | Usa `Intl.NumberFormat('pt-BR')` |
| `QuantitySelector` | Botões − e + com o valor no meio | Usado no mini cart, e talvez no card |
| `Badge` | Contador, como a quantidade no ícone do carrinho | Atualiza via `aria-live` |

## Passos

- [ ] Confirmar a lista com o que saiu do [mapeamento](01-mapear-figma.md)
- [ ] Definir as props de cada componente (tipadas em TS)
- [ ] Definir as variantes visuais com base no Figma

## Pronto quando

Cada componente base tem um nome, uma responsabilidade e props definidas.
