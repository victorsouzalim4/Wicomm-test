# 2.4 — Árvore de componentes

A organização segue o [ADR-0009](../../adr/0009-organizacao-layout-sections-components.md): **layout** (o que envolve a página), **sections** (blocos do conteúdo) e **components** (peças reaproveitáveis).

## Árvore

```
App
└── CartProvider                          # estado do carrinho (ADR-0006)
    ├── layout/
    │   ├── AnnouncementBar
    │   ├── Header
    │   │   ├── Logo
    │   │   ├── SearchBar
    │   │   ├── AccountButton            # "Minha conta / Entre ou cadastre-se"
    │   │   ├── IconButton (favoritos)
    │   │   ├── CartButton               # ícone + contador → abre o MiniCart
    │   │   └── MainNav
    │   │       ├── NavItem (×5)         # Perfumaria, Cabelos, Corpo e Banho, Rosto, Nutricional (com Dropdown)
    │   │       ├── NavItem "Revenda"    # variante com borda + Dropdown "Consultor"
    │   │       └── NavItem "Promoções"  # variante de destaque (amarelo)
    │   │
    │   ├── <main> ── sections/
    │   │   ├── HeroBanner
    │   │   │   └── Carousel → BannerImage (×N)
    │   │   ├── OfferCountdown
    │   │   │   └── Countdown
    │   │   ├── BenefitsBar
    │   │   │   └── BenefitItem (×4)
    │   │   ├── ProductShelf "Os Preferidos..."
    │   │   │   ├── SectionTitle
    │   │   │   └── Carousel → ProductCard (×N)
    │   │   │                    ├── Badge (desconto)
    │   │   │                    ├── IconButton (favoritar)
    │   │   │                    ├── Tag (cupom, frete grátis...)
    │   │   │                    ├── Price
    │   │   │                    └── Button "Comprar" → addToCart
    │   │   ├── PromoBannerGrid
    │   │   │   ├── SectionTitle
    │   │   │   └── BannerLink (×3)
    │   │   ├── ProductShelf "Perfumes que despertam..."   # mesmo componente, outros dados
    │   │   ├── CategoryBanners
    │   │   │   ├── SectionTitle
    │   │   │   └── BannerLink (×4)
    │   │   ├── ProductShelf "Sua rotina de beleza..."     # mesmo componente, outros dados
    │   │   ├── ResellerBanners
    │   │   │   └── BannerLink (×2)
    │   │   ├── BlogSection
    │   │   │   ├── SectionTitle
    │   │   │   └── BlogCard (×3)
    │   │   ├── CausesSection
    │   │   │   ├── SectionTitle
    │   │   │   └── InfoCard (×3)
    │   │   └── SocialSection
    │   │       └── Carousel → BannerImage (×N)
    │   │
    │   ├── Footer
    │   │   ├── NewsletterForm
    │   │   ├── FooterLinks (×N colunas)
    │   │   ├── ContactInfo / StoreAddresses
    │   │   ├── SocialLinks
    │   │   └── PaymentMethods
    │   │
    │   └── WhatsAppButton                # flutuante, posição fixa
    │
    ├── MiniCart                          # Drawer à direita (não está no Figma)
    │   ├── CartItem (×N)
    │   │   ├── Price
    │   │   └── QuantitySelector
    │   └── CartSummary
    └── MobileMenu                        # Drawer à esquerda (não está no Figma)
```

## Onde fica cada estado

| Estado | Dono | Por quê |
| --- | --- | --- |
| Itens do carrinho | `CartContext` | Usado pelo `ProductCard`, pelo `CartButton` e pelo `MiniCart`, que estão em ramos diferentes da árvore |
| Mini cart aberto/fechado | `CartContext` | Abre pelo `CartButton` e também ao adicionar um produto |
| Menu mobile aberto/fechado | `Header` (estado local) | Só o header precisa saber |
| Dropdown aberto | `NavItem` (estado local) | Cada item controla o próprio dropdown |
| Slide atual | `Carousel` (hook `useCarousel`) | Cada carrossel é independente |
| Tempo restante | `Countdown` (estado local) | Atualiza a cada segundo, sem afetar o resto da página |
| Campos da newsletter | `NewsletterForm` (estado local) | Validação e mensagem de sucesso ficam no formulário |

## Reaproveitamento que a árvore mostra

- **`ProductShelf` ×3:** um componente, três conjuntos de dados (título + produtos)
- **`Carousel` ×5:** banner principal, três vitrines e redes sociais (ADR-0005)
- **`BannerLink` ×9:** grid de lançamentos, cronograma capilar e consultor
- **`SectionTitle` ×7:** o mesmo estilo de título em todas as seções (Poppins 600, 20px)
- **`Drawer` ×2:** `MiniCart` e `MobileMenu` usam a mesma base (foco preso, `Esc` fecha, overlay)
