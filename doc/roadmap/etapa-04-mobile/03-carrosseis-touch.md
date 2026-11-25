# 4.3 — Carrosséis com toque

## Proposta

- Usar **CSS scroll-snap** (`scroll-snap-type: x mandatory`) como base do `Carousel`. O swipe nativo funciona no celular sem JS extra, e as setas só chamam `scrollBy`.
- A quantidade de itens visíveis muda por breakpoint, por exemplo: 1,2 no celular (o pedaço do próximo card indica que dá para arrastar), 2,5 no tablet e o número do Figma no desktop.
- No celular, as setas podem sumir (o swipe é suficiente) e os indicadores ficam.

## Passos

- [ ] Implementar o scroll-snap no `Carousel`
- [ ] Ajustar os itens visíveis por breakpoint
- [ ] Respeitar `prefers-reduced-motion`: sem rolagem suave nem autoplay

## Commits sugeridos

- `feat: adiciona suporte a swipe no carrossel com scroll-snap`
- `style: ajusta itens visíveis do carrossel por breakpoint`
