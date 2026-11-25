# 2.3 — Seções da página

## Objetivo

Dividir a página em seções, na ordem do Figma, e definir o que cada uma usa.

## Proposta (ajustar após o mapeamento do Figma)

| Seção | Tag semântica | Usa |
| --- | --- | --- |
| `Header` | `<header>` + `<nav>` | `Container`, logo, `Menu`, busca, botão do carrinho com `Badge` |
| `HeroBanner` | `<section>` | `Carousel` de banners |
| `ProductShelf` (vitrine) | `<section>` | `SectionTitle`, `Carousel` ou grid de `ProductCard` |
| Outras seções do Figma (categorias, benefícios, newsletter...) | `<section>` | A definir |
| `Footer` | `<footer>` | `Container`, links, redes sociais |
| `MiniCart` | `<aside>` em um `Drawer` | `CartItem`, `QuantitySelector`, `Price`, `Button` |

## Pontos de atenção

- Se a vitrine aparecer **mais de uma vez** no Figma (por exemplo, "Lançamentos" e "Mais vendidos"), é **uma** seção `ProductShelf` reaproveitada com props diferentes (título e lista de produtos), não duas seções.
- O `App.tsx` só monta as seções em ordem, sem lógica.
- Só existe um `<h1>` na página. Cada seção começa com `<h2>`.

## Passos

- [ ] Fechar a lista de seções com base no Figma
- [ ] Definir a tag semântica de cada uma
- [ ] Definir quais seções se repetem com dados diferentes

## Pronto quando

O `App.tsx` pode ser escrito como uma lista de seções, sem dúvidas sobre o que vai em cada uma.
