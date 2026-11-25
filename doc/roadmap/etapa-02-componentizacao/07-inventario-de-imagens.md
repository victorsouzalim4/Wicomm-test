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

## Exportação (feita em 25/11/2026)

Os arquivos estão em `figma-export/`, na raiz do projeto. A pasta está no `.gitignore`: as imagens de conteúdo vão para o Cloudinary, e os SVGs de interface vão para `src/assets/` quando forem usados.

- **Imagens de conteúdo (26 PNGs, arquivo original do Figma, sem recompressão):** `hero-*`, `produto-*` (5), `lancamento-*` (3), `cronograma-*` (4), `consultor-*` (2), `blog-*` (3), `causa-*` (3), `social-*` (3), `footer-selo-qualidade`
- **SVGs:** `logo-amakha.svg` (header), `logo-amakha-coroa.svg` (footer), `logo-wicomm.svg`, `logo-vtex.svg`, `pagamento/` (7 bandeiras), `icones/` (Facebook, Instagram, YouTube, WhatsApp)

### O que a exportação revelou

- **Os botões "APROVEITE" e "COMPRE" fazem parte da imagem** nos banners de lançamentos e do cronograma capilar. Então o banner inteiro é o link (`BannerLink`), e o `alt` repete o texto da imagem.
- **O fundo da newsletter não é imagem:** são formas com degradê (`#D9D9D9` → `#737373`) sobre fundo preto. Vai ser feito em CSS.
- **Os ícones de interface do Figma são do pacote Vuesax/Iconsax** (`search-normal`, `profile-circle`, `people`, `discount-shape`...), não do Lucide. Isso afeta o [ADR-0004](../../adr/0004-icones-lucide.md) (decisão pendente).
- **Os itens da barra de vantagens são vetores com o texto convertido em curvas.** O texto vai ser HTML (acessível), e só os ícones circulares viram SVG. Por enquanto só o ícone do PIX foi exportado limpo (`icones/vantagem-pix-rascunho.svg`). Os outros três dependem da decisão sobre os ícones.

## Próximos passos

- [x] Escolher a plataforma de hospedagem: Cloudinary (ADR-0008)
- [x] Exportar as imagens de conteúdo do Figma
- [x] Subir as imagens no Cloudinary. O *public ID* é o nome do arquivo sem extensão, por exemplo `https://res.cloudinary.com/ycsxevam/image/upload/f_auto,q_auto,w_400/produto-athena`
- [ ] Exportar os SVGs de interface para `src/assets/icons/` e `src/assets/brand/`
- [ ] Escrever o `alt` de cada imagem de conteúdo (vai junto nos dados). Imagens com texto, como os banners, levam no `alt` o texto que aparece nelas.
