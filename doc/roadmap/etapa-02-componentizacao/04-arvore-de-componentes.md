# 2.4 — Montar a árvore de componentes

## Objetivo

Desenhar quem renderiza quem e onde fica o estado, antes de codar.

## Hipótese inicial (revisar com o Figma)

```
App
└── CartProvider                  # estado global do carrinho
    ├── Topbar
    │   └── Carousel
    ├── Header
    │   ├── Logo
    │   ├── Nav  ──────────────── # no mobile: Drawer (lado esquerdo)
    │   └── CartButton            # mostra o contador e abre o MiniCart
    ├── main
    │   ├── HeroBanner
    │   │   └── Carousel
    │   ├── ProductShelf (×N)     # uma por vitrine, título e produtos via props
    │   │   ├── SectionTitle
    │   │   └── Carousel
    │   │       └── ProductCard
    │   │           ├── Price
    │   │           └── Button ── # chama addToCart
    │   └── Newsletter
    ├── Footer
    └── MiniCart                  # Drawer (lado direito)
        ├── CartItem (×N)
        │   ├── Price
        │   └── QuantitySelector
        └── CartSummary           # subtotal e botão de finalizar
```

## Onde fica cada estado

| Estado | Onde | Por quê |
| --- | --- | --- |
| Itens do carrinho | `CartContext` | Usado pelo `ProductCard`, pelo `CartButton` e pelo `MiniCart`, que estão em ramos diferentes da árvore |
| Mini cart aberto/fechado | `CartContext` | Abre ao clicar no `CartButton` e também ao adicionar um produto |
| Menu mobile aberto/fechado | `Header` (estado local) | Ninguém fora do header precisa saber |
| Slide atual de cada carrossel | `Carousel` (estado local) | Cada carrossel é independente |

## Pronto quando

A árvore reflete o Figma, e cada estado tem um dono definido.

## Commits sugeridos

- `docs: define árvore de componentes e estados`
