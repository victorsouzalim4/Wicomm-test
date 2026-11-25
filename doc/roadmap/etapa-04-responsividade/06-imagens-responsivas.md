# 4.6 — Imagens responsivas

## Objetivo

Entregar a imagem do tamanho certo para cada tela. Isso ajuda na responsividade e também no critério "Performance".

## Passos

- [ ] Gerar cada imagem em mais de um tamanho e em WebP (AVIF se der tempo)
- [ ] Usar `srcset` e `sizes` nas imagens de produto
- [ ] Usar `<picture>` nos banners quando o Figma tiver uma arte diferente para o mobile
- [ ] Definir `width` e `height` (ou `aspect-ratio`) em todas as imagens, para a página não "pular" ao carregar (CLS)
- [ ] `loading="lazy"` nas imagens abaixo da dobra. O primeiro banner **não** leva lazy e pode levar `fetchpriority="high"`.
- [ ] Opcional: automatizar a geração com o plugin `vite-imagetools`

## Pronto quando

O celular nunca baixa a imagem do tamanho do desktop.

## Commits sugeridos

- `perf: adiciona imagens responsivas com srcset`
- `perf: carrega imagens abaixo da dobra com lazy loading`
