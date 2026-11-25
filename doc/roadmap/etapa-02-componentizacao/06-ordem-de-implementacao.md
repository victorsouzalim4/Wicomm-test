# 2.6 — Ordem de implementação

## Objetivo

Implementar de baixo para cima: primeiro as peças pequenas, depois as seções que as usam. Assim cada commit entrega algo que funciona.

## Ordem e andamento

1. **Componentes base**
   - [x] `Container`, `Icon`, `Button`, `IconButton`, `SectionTitle`, `Price`, `Tag`, `DiscountBadge`, `BannerLink`
2. **Componentes compostos**
   - [x] `ProductCard`, `Carousel` (+ `useCarousel`), `Drawer` (sobre o `<dialog>` nativo), `QuantitySelector`
3. **Seções e layout**
   - [x] `AnnouncementBar`, `Header` (busca, conta, `CartButton`, `NavItem` com dropdown, `MobileMenu`)
   - [x] `HeroBanner`, `OfferCountdown` (+ `useCountdown`), `BenefitsBar`, `ProductShelf` ×3
   - [x] `PromoBannerGrid`, `CategoryBanners`, `ResellerBanners`, `BlogSection`, `CausesSection`, `SocialSection`
   - [x] `Footer` (+ `NewsletterForm`), `WhatsAppButton`
4. **Estado do carrinho**
   - [x] `cartReducer` e `cartStorage` com testes, `CartProvider` com sincronização entre abas, `useCart`
5. **Interações**
   - [x] Comprar → mini cart abre e atualiza (quantidade, remover, subtotal, contador no header)
   - [x] Dropdowns do menu (hover, clique, Esc, clique fora) e menu mobile
6. **Acabamento**
   - [ ] Revisão de fidelidade lado a lado com o Figma
   - [ ] Lighthouse e ajustes de performance

## Conferência no navegador (25/11/2026)

- **Desktop:** a página inteira foi comparada com o Figma, seção por seção
- **Carrinho:** adicionar abre o mini cart, + e − recalculam o subtotal, o `Esc` fecha e o foco volta ao botão, e recarregar mantém o carrinho
- **Menu:** o dropdown abre no hover e no clique, e fecha com `Esc`
- **Celular (390px) e tablet (768px):** sem rolagem horizontal, menu hambúrguer com subcategorias, "COMPRAR" sempre visível
- **Bug encontrado e corrigido:** os textos `sr-only` dos cards (com `position: absolute`) escapavam do trilho do carrossel e criavam rolagem horizontal no celular
