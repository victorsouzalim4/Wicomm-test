# 2.2 — Mapear as seções da página

Fonte: Figma "Wicomm / Teste Prático", página **Desktop**, frame **AMAKHA - HOME** (1280 × ~5922px). O Figma só tem a versão desktop. Tablet e mobile são decisão nossa (etapa 4).

## Seções, de cima para baixo

| # | Seção (nome no código) | Camada no Figma | Y / altura | Tag semântica | Conteúdo |
| --- | --- | --- | --- | --- | --- |
| 1 | `AnnouncementBar` | Top Anuncio Bar | 0 / 47 | `<div role="region" aria-label="Avisos">` | "SEMANA DO CONSUMIDOR ✦" e uma pílula preta "FRETE GRÁTIS EM COMPRAS ACIMA DE 199,90 R$". Fundo `#F3A07A`. |
| 2 | `Header` | Head (componente) | 47 / 139 | `<header>` | Logo, busca, "Minha conta", favoritos, carrinho com contador. Abaixo, o menu de categorias. |
| 3 | `HeroBanner` | image + setas/bolinhas | 186 / 372 | `<section aria-label="Destaques">` | Banner largura total, em carrossel (setas e bolinhas) |
| 4 | `OfferCountdown` | Oferta | 558 / 87 | `<section>` | "OFERTAS LIMITADAS / Produtos com preços imperdíveis" e contador regressivo (dias : horas : minutos : segundos). Fundo `#F0F0F0`. |
| 5 | `BenefitsBar` | BENEFÍCIOS | 645 / 123 | `<section aria-label="Vantagens">` com `<ul>` | 4 itens com ícone: 3% OFF no PIX, Frete grátis acima de R$ 149,90, Parcele em até 6x sem juros, Nossas lojas. Fundo `#F5F5F5`. |
| 6 | `ProductShelf` | PRODUTOS + setas/bolinhas | 801 / 470 | `<section>` com `<h2>` | "Os Preferidos da Amakha Paris": carrossel de cards de produto |
| 7 | `PromoBannerGrid` | Frame 2099 | 1303 / 723 | `<section>` com `<h2>` | "Potencialize sua saúde com os nossos lançamentos": 1 banner grande + 2 empilhados, cada um com "APROVEITE ›" |
| 8 | `ProductShelf` | PRODUTOS | 2059 / 470 | `<section>` com `<h2>` | "Perfumes que despertam emoções: Experimente a magia da Amakha Paris" |
| 9 | `CategoryBanners` | Frame 2100 | 2561 / 458 | `<section>` com `<h2>` | "Desvende o segredo dos cabelos perfeitos com nosso cronograma capilar": 4 banners verticais com "COMPRE ›" |
| 10 | `ProductShelf` | PRODUTOS | 3051 / 470 | `<section>` com `<h2>` | "Sua rotina de beleza e bem estar para brilhar todos os dias" |
| 11 | `ResellerBanners` | CONSULTOR | 3553 / 333 | `<section aria-label="Seja um consultor">` | 2 banners lado a lado ("Independência financeira com baixo investimento") |
| 12 | `BlogSection` | Blogs | 3886 / 560 | `<section>` com `<h2>` | "Nosso Blog": 3 cards (imagem, título, resumo, "LEIA MAIS") |
| 13 | `CausesSection` | BENEFÍCIOS | 4449 / 431 | `<section>` com `<h2>` | "Nossas Causas": 3 cards (Pontos de Apoio, Empreendedorismo/Divas, Amakha Social). Fundo `#EEEEEE`. |
| 14 | `SocialSection` | Inf | 4912 / 249 | `<section>` | "Fique por dentro das nossas redes sociais @amakhaoficial" e carrossel de imagens com setas |
| 15 | `Footer` | Footer (componente "Footer-com-news") | 5189 / 733 | `<footer>` | Newsletter, colunas de links, contato, endereços, redes sociais, selo, formas de pagamento, assinaturas Wicomm/VTEX. Fundo `#EEEEEE`. |
| — | `WhatsAppButton` | WPP (posição fixa) | fixo, 46 × 46 | `<a>` | Botão flutuante do WhatsApp no canto direito |

## Elementos ocultos ou de estado encontrados no Figma

- **Dropdown "CONSULTOR"** (172 × 192, oculto, abaixo do botão "Revenda"): é o menu suspenso da Revenda. Confirma que o menu tem dropdowns.
- **Primeiro card de cada vitrine** aparece com o botão "COMPRAR" e as tags "CUPOM COM 15% OFF" / "DIA DO CONSUMIDOR", e os outros não. Interpretamos isso como o **estado de hover** do card (decisão a registrar no README).
- **`image 10`** (60% de opacidade) e uma segunda **Top Anuncio Bar** em y=99: camadas de referência. Não fazem parte da página.

## Fora do Figma, mas pedidos pelo teste

- **Mini cart** (carrinho lateral): abre pelo ícone do carrinho e ao adicionar um produto
- **Menu mobile** e todo o layout de tablet e celular
- **Estados de hover e foco** dos botões e links
