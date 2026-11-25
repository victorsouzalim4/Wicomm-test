# 4.2 — Layout fluido e tipografia

## Objetivo

Fazer a página se adaptar bem também entre os breakpoints, e não só neles.

## Passos

- [ ] `Container` com `max-width` igual à largura de conteúdo do Figma e padding lateral menor no celular
- [ ] Usar Flexbox e Grid para os layouts. Grids de produtos com `repeat(auto-fill, minmax(...))` quando não estiverem em carrossel.
- [ ] Tipografia fluida com `clamp()` nos títulos grandes, para não precisar de um tamanho por breakpoint
- [ ] Evitar larguras e alturas fixas em px. Preferir `%`, `rem`, `min()`, `max()` e `aspect-ratio`.
- [ ] Conferir se nada causa rolagem horizontal em 320px de largura
- [ ] Áreas clicáveis com pelo menos 44×44px no celular

## Pronto quando

A página não quebra em nenhuma largura entre 320px e 1920px.

## Commits sugeridos

- `style: aplica layout fluido nas seções`
- `style: adiciona tipografia fluida nos títulos`
