# Etapa 2 — Definir a componentização

## Objetivo

Antes de escrever o primeiro componente, quebrar o layout do Figma em **seções** (blocos grandes da página) e em **componentes** reaproveitáveis (peças que aparecem em mais de um lugar). Isso evita código repetido, que é um dos pontos do critério "Qualidade do código".

## Princípios

- **Seção** (`src/sections/`): um bloco da página que aparece uma vez, como Header, Banner, Vitrine e Footer. Ela organiza componentes e não guarda regra de negócio.
- **Componente** (`src/components/`): uma peça reaproveitável, como Button, ProductCard, Carousel e Price. Recebe tudo por props.
- **Se aparece duas vezes, vira componente.** Se muda só o conteúdo, a diferença vai em props, não em uma cópia do componente.
- Os nomes seguem os nomes das camadas do Figma sempre que fizer sentido.

## Partes

| # | Parte | Status |
| --- | --- | --- |
| 1 | [Extrair os design tokens do Figma](01-design-tokens.md) | [x] fontes e tokens no `@theme` (ícones pendentes) |
| 2 | [Mapear as seções da página](02-mapear-secoes.md) | [x] |
| 3 | [Identificar os componentes reaproveitáveis](03-componentes-reaproveitaveis.md) | [x] |
| 4 | [Montar a árvore de componentes](04-arvore-de-componentes.md) | [x] |
| 5 | [Definir props e tipos](05-props-e-tipos.md) | [ ] |
| 6 | [Definir a ordem de implementação](06-ordem-de-implementacao.md) | [ ] |
| 7 | [Inventário de imagens](07-inventario-de-imagens.md) | [x] mapeado, exportado e hospedado no Cloudinary |

As partes 2, 3, 4 e 7 já foram feitas a partir do Figma real (frame "AMAKHA - HOME", só desktop, 1280px). A organização das pastas está no [ADR-0009](../../adr/0009-organizacao-layout-sections-components.md).
