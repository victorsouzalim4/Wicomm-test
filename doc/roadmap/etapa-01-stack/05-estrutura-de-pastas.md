# 1.5 — Definir a estrutura de pastas

## Objetivo

Combinar desde o início onde cada coisa fica, para o código crescer organizado. A organização está no [ADR-0009](../../adr/0009-organizacao-layout-sections-components.md), e os dados vêm da API mock do [ADR-0010](../../adr/0010-api-mock-com-json-estatico.md).

## Estrutura

```
public/
└── api/             # JSONs da API mock (products.json, banners.json...)
src/
├── assets/
│   ├── brand/       # logos (Amakha, Wicomm, VTEX) e bandeiras de pagamento, em SVG
│   └── icons/       # ícones de interface, em SVG
├── layout/          # AnnouncementBar, Header, Footer, WhatsAppButton
├── sections/        # blocos do <main>: HeroBanner, ProductShelf, BlogSection...
├── components/      # peças reaproveitáveis: Button, Carousel, ProductCard...
│   └── Button/
│       ├── Button.tsx
│       └── Button.test.tsx   # quando fizer sentido
├── context/         # CartContext
├── hooks/           # useCarousel, useCountdown, useProducts...
├── services/        # acesso à API mock (fetchJson, productService...)
├── types/           # tipos compartilhados (Product, CartItem...)
├── utils/           # funções puras (formatPrice, optimizeImage...)
├── App.tsx
├── index.css        # @import do Tailwind, @theme (tokens) e estilos base
├── main.tsx
└── setupTests.ts
```

## Convenções

- Componentes em `PascalCase`, hooks começando com `use`, demais arquivos em `camelCase`
- Estilo com classes do Tailwind dentro do próprio componente. O único CSS global é o `index.css`.
- Imports entre pastas com o alias `@/` (`import { Button } from '@/components/Button/Button'`)

## Passos

- [x] Criar as pastas, com `.gitkeep` nas vazias
- [x] Configurar o alias `@/` em `vite.config.ts` e `tsconfig.app.json`

## Commits

- `chore: cria estrutura de pastas e alias @/`
