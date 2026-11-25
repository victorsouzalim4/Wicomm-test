# 4.7 — Imagens responsivas

## Proposta

- **Banners:** `<picture>` com uma imagem para celular e outra para desktop (o tipo `Banner` já prevê `image.mobile` e `image.desktop`)
- **Produtos:** `srcset` + `sizes`, para o celular não baixar a imagem do desktop
- `width` e `height` sempre definidos, para evitar salto de layout (CLS)
- `loading="lazy"` em tudo que está abaixo da dobra. O primeiro banner fica sem lazy e com `fetchpriority="high"`.

## Passos

- [ ] Gerar as versões das imagens em tamanhos diferentes
- [ ] Aplicar `<picture>` nos banners e `srcset` nos cards

## Commits sugeridos

- `perf: adiciona imagens responsivas com picture e srcset`
