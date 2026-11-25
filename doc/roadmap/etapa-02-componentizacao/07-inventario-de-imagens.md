# 2.7 — Inventário de imagens

Cada imagem do Figma, com o componente ao qual pertence e de onde ela é chamada. Seguindo o [ADR-0008](../../adr/0008-imagens-hospedadas-externamente.md):

- **Conteúdo** (banners, produtos, blog, causas, redes sociais): fica na plataforma externa e chega ao componente **por URL, pelos dados** (mocks/service, etapa 3). O componente nunca conhece a URL.
- **Interface** (logo, ícones, bandeiras de pagamento): fica no projeto, em SVG.

## Imagens de conteúdo (hospedadas, vêm dos dados)

| Imagem | Qtd. | Componente que renderiza | Seção que chama | Arquivo de dados | Tamanho no Figma |
| --- | --- | --- | --- | --- | --- |
| Banner principal ("Compre um perfume 100ml e ganhe...") | 1 (+ slides do carrossel) | `BannerImage` | `HeroBanner` | `banners.ts` → `hero` | 1280 × 372 |
| Foto do produto (perfumes) | 5 por vitrine | `ProductCard` | `ProductShelf` (×3) | `products.ts` | 210 × 210 (imagem 170 × 170) |
| Banner "Linha Mel Capilar" (grande) | 1 | `BannerLink` | `PromoBannerGrid` | `banners.ts` → `launches` | ~576 × 674 |
| Banners "Magic Repair" e "Magic Curly" | 2 | `BannerLink` | `PromoBannerGrid` | `banners.ts` → `launches` | ~576 × 329 |
| Banners do cronograma capilar (Home Spa, Sabonetes, Cremes, Suplementos) | 4 | `BannerLink` | `CategoryBanners` | `banners.ts` → `haircare` | ~280 × 410 |
| Banners do consultor (Independência financeira, mãos com produto) | 2 | `BannerLink` | `ResellerBanners` | `banners.ts` → `reseller` | ~576 × 264 |
| Capas do blog | 3 | `BlogCard` | `BlogSection` | `blog.ts` | ~300 × 135 |
| Logos das causas (mapa do Brasil, Divas, Amakha Social) | 3 | `InfoCard` | `CausesSection` | `causes.ts` | ~100 × 100 |
| Posts das redes sociais | 3+ (carrossel) | `BannerImage` | `SocialSection` | `social.ts` | ~200 × 200 |
| Fundo da newsletter (faixa escura com degradê) | 1 | `NewsletterForm` | `Footer` | — (dá para fazer em CSS; verificar) | 1168 × 175 |
| Selo de qualidade | 1 | `img` simples | `Footer` | `footer.ts` | ~70 × 70 |

> Os tamanhos com "~" foram medidos visualmente e são confirmados na exportação.

## Imagens de interface (ficam no projeto, em SVG)

| Imagem | Onde | Origem |
| --- | --- | --- |
| Logo Amakha Paris (com e sem texto) | `Header`, `Footer` | Exportar do Figma |
| Ícones de busca, usuário, coração, sacola, setas, chevron | `Header`, `Carousel`, `ProductCard` | Lucide, se o traço for fiel (ADR-0004) |
| Ícones da barra de vantagens (PIX, caminhão, cartão, loja) | `BenefitsBar` | Exportar do Figma: têm fundo amarelo próprio |
| Ícones de Revenda e Promoções no menu | `MainNav` | Exportar do Figma |
| Redes sociais (Facebook, YouTube, Instagram) e WhatsApp | `Footer`, `WhatsAppButton` | Exportar do Figma (o Lucide não tem marcas) |
| Bandeiras de pagamento (Amex, Diners, Visa, Master, Elo, Pix, Boleto) | `Footer` → `PaymentMethods` | Exportar do Figma |
| Logos Wicomm e VTEX | `Footer` | Exportar do Figma |

## Próximos passos

- [ ] Escolher a plataforma de hospedagem (fecha o ADR-0008)
- [ ] Exportar as imagens de conteúdo do Figma em 2x, subir na plataforma e anotar o identificador de cada uma
- [ ] Exportar os SVGs de interface para `src/assets/icons/` e `src/assets/brand/`
- [ ] Escrever o `alt` de cada imagem de conteúdo (vai junto nos dados). Imagens com texto, como os banners, levam no `alt` o texto que aparece nelas.
