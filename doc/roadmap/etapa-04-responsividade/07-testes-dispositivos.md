# 4.7 — Testar em vários tamanhos

## Objetivo

Conferir a página nos tamanhos que o avaliador provavelmente vai usar.

## Larguras para testar

| Largura | Referência |
| --- | --- |
| 320px | Celular pequeno |
| 375px / 390px | iPhone |
| 768px | Tablet em pé |
| 1024px | Tablet deitado / notebook pequeno |
| 1280px / 1440px | Desktop (comparar com o Figma) |
| 1920px | Monitor grande |

## Passos

- [ ] Testar cada largura no modo dispositivo do DevTools
- [ ] Testar num celular de verdade, pelo link da Vercel
- [ ] Em cada largura, conferir: rolagem horizontal, textos cortados, sobreposição, áreas de toque, menu, carrosséis e mini cart
- [ ] Rodar o Lighthouse no modo mobile e anotar as notas
- [ ] Comparar o desktop lado a lado com o Figma (um overlay, como o da extensão PerfectPixel, ajuda)

## Pronto quando

Nenhum problema visual em nenhuma largura da tabela.

## Commits sugeridos

- `fix: <cada problema encontrado, um commit por correção>`
