# 2.6 — Ordem de implementação

## Objetivo

Implementar de baixo para cima: primeiro as peças pequenas, depois as seções que as usam. Assim cada commit entrega algo que funciona.

## Ordem e andamento

1. **Componentes base**
   - [x] `Container`, `Icon` (SVGs do Figma via `vite-plugin-svgr`), `Button`, `IconButton`, `SectionTitle`, `Price`, `Tag`, `DiscountBadge`
2. **Componentes compostos**
   - [x] `ProductCard` (hover com "COMPRAR", favoritar, selo e parcelas calculados)
   - [x] `Carousel` + hook `useCarousel` (scroll-snap, setas, bolinhas)
   - [ ] `Drawer`, `QuantitySelector` (entram junto com o mini cart)
3. **Seções**
   - [x] `ProductShelf` (as 3 vitrines, com esqueleto de carregamento)
   - [ ] `AnnouncementBar`, `Header`, `HeroBanner`, `OfferCountdown`, `BenefitsBar`, `PromoBannerGrid`, `CategoryBanners`, `ResellerBanners`, `BlogSection`, `CausesSection`, `SocialSection`, `Footer`, `WhatsAppButton`
4. **Estado do carrinho:** `CartContext`, reducer e testes do reducer
5. **Interações:** `CartButton` com contador, `MiniCart` abrindo e atualizando, menu mobile, dropdowns
6. **Acabamento:** revisão de fidelidade com o Figma, transições, navegação pelo teclado

## Conferência visual (25/11/2026)

As vitrines foram comparadas com o Figma no navegador:

- Cards de 226px com 9px de espaço, sombra, selo, coração, "FRETE GRÁTIS", preço "de/por" e parcelas
- O hover mostra o "COMPRAR" sobre a parte de baixo da imagem (no Figma ele fica a 180px do topo da área de 210px)
- O favorito preenche o coração e muda o texto para leitores de tela
- Em telas estreitas, o carrossel mostra as setas e as bolinhas, avança uma página por clique e desativa as setas nas pontas
