# 2.3 — Componentes reaproveitáveis

Peças de `src/components/`, usadas por mais de uma seção ou candidatas a isso. Os valores vêm do Figma.

| Componente | Onde aparece | Props / variações | Medidas do Figma |
| --- | --- | --- | --- |
| `Container` | Todas as seções | — | Largura de conteúdo 1168px, margem lateral de 56px no frame de 1280px |
| `SectionTitle` | 7 seções | `as` (`h2`/`h3`), `children` | Poppins 600, 20px, altura de linha 131%, `#000` |
| `Button` | Card ("COMPRAR"), newsletter ("CADASTRAR"), busca, banners | `variant`: `primary` (amarelo), `dark` (preto), `outline` (borda amarela, "Revenda"), `light` (branco, "SAIBA MAIS"); `size`; `fullWidth` | "COMPRAR": Poppins 600, 14px, -4% de espaçamento, texto `#FFF` |
| `IconButton` | Favoritos, carrinho, setas dos carrosséis | `icon`, `label` (texto acessível), `badge?` | — |
| `Badge` | Desconto no card | `children` | 35 × 18, raio 4px, fundo `#FFB802`, texto Inter 500, 13px, branco |
| `Tag` | "CUPOM COM 15% OFF", "DIA DO CONSUMIDOR", "FRETE GRÁTIS" | `variant`: `dark`, `highlight`, `text` | "FRETE GRÁTIS": Poppins 500, 14px, `#FFB802` |
| `Price` | Card, mini cart | `price`, `listPrice?`, `installments?` | Atual: Poppins 700, 14px. Antigo: Poppins 300, 13px, riscado. Parcelas: Poppins 300, 14px. |
| `ProductCard` | 3 vitrines | `product`, `onAddToCart` | 226 × 400, padding 8px, gap 12px, raio 8px, sombra `0 0 4px rgba(0,0,0,.15)`, imagem 210 × 210. Nome: Poppins 500, 14px. |
| `Carousel` | Banner principal, 3 vitrines, redes sociais | `label`, `children`, `slideClassName`, `showArrows`, `showDots`, `autoplayMs` (ADR-0005) | Setas circulares escuras nas laterais, bolinhas abaixo (ativa preta, inativas cinza) |
| `BannerLink` | Lançamentos, cronograma capilar, consultor | `image` (`src`, `alt`), `href`, `ctaLabel?` | Proporções diferentes por seção, definidas pela seção que usa |
| `BlogCard` | Blog | `image`, `title`, `excerpt`, `href` | Imagem em cima, título, resumo, "LEIA MAIS" |
| `InfoCard` | Nossas Causas | `image`, `title`, `description` | Card branco com logo/ícone, título e texto centralizados |
| `BenefitItem` | Barra de vantagens | `icon`, `title`, `subtitle?` | Ícone circular amarelo + texto |
| `Countdown` | Ofertas limitadas | `endsAt` | Blocos "00 : 00 : 00 : 00" com legenda pequena embaixo |
| `Dropdown` | Menu de categorias, Revenda | `trigger`, `items` | Card branco, padding 10px, gap 4px, sombra `0 2px 4px rgba(0,0,0,.25)` |
| `Drawer` | Mini cart, menu mobile | `side`, `open`, `onClose`, `title` | Não está no Figma |
| `QuantitySelector` | Mini cart | `value`, `min`, `max`, `onChange` | Não está no Figma |
