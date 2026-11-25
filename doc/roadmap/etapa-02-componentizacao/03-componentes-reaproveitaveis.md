# 2.3 — Identificar os componentes reaproveitáveis

## Objetivo

Encontrar as peças que se repetem pelo layout e transformá-las em componentes únicos.

## Hipótese inicial (revisar com o Figma)

| Componente | Onde aparece | Variações (viram props) |
| --- | --- | --- |
| `Button` | Card, mini cart, newsletter, banner | `variant` (primário, secundário, ícone), `size`, `disabled` |
| `Icon` | Header, footer, card, mini cart | `name`, `size`, `label` (acessibilidade) |
| `Price` | Card, mini cart | Preço atual, preço antigo riscado, parcelamento |
| `ProductCard` | Vitrines | Imagem, nome, preço, selo de desconto, botão comprar |
| `Carousel` | Banner, vitrines, topbar | Itens por tela (muda por breakpoint), setas, bolinhas, autoplay |
| `QuantitySelector` | Mini cart | Valor, mínimo, máximo |
| `Drawer` | Mini cart, menu mobile | Lado (direita/esquerda), aberto/fechado, título |
| `Container` | Todas as seções | Largura máxima e padding lateral |
| `SectionTitle` | Vitrines e demais seções | Texto e nível do título (`h2`, `h3`) |

## Passos

- [ ] Percorrer o Figma e marcar cada elemento que aparece mais de uma vez
- [ ] Para cada um, listar o que muda entre as aparições: isso vira props
- [ ] Conferir se há componentes do próprio Figma (instâncias e variantes): eles indicam onde o designer pensou em reaproveitamento

## Pronto quando

A tabela cobre todos os elementos repetidos do layout.

## Commits sugeridos

- `docs: lista componentes reaproveitáveis`
