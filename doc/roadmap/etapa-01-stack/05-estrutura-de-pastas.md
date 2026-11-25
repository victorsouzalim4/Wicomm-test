# 1.5 — Definir a estrutura de pastas

## Objetivo

Combinar desde o início onde cada coisa fica, para o código crescer organizado.

## Estrutura

```
src/
├── assets/          # imagens otimizadas (WebP/AVIF) e ícones SVG
├── components/      # um componente por pasta
│   └── Button/
│       ├── Button.tsx
│       ├── Button.module.scss
│       └── Button.test.tsx   # quando fizer sentido
├── sections/        # blocos grandes da página (Header, Hero, Vitrine, Footer...)
├── context/         # CartContext (estado global do carrinho)
├── hooks/           # hooks reaproveitáveis (useCart, useCarousel...)
├── data/            # dados mockados (lista de produtos)
├── types/           # tipos TypeScript compartilhados (Product, CartItem...)
├── utils/           # funções puras (formatar preço etc.)
├── styles/          # tokens, breakpoints, mixins, global
├── App.tsx
└── main.tsx
```

## Convenções

- Componentes em `PascalCase`, hooks começando com `use`, demais arquivos em `camelCase`
- Cada componente tem o próprio `*.module.scss`. Nada de estilo global espalhado.
- Os nomes das `sections/` seguem os nomes das seções do Figma. A lista final sai da análise do layout.

## Passos

- [ ] Criar as pastas. Pastas vazias levam um `.gitkeep` até receber arquivos.
- [ ] Configurar o alias `@/` apontando para `src/`, em `vite.config.ts` e `tsconfig.app.json`

## Pronto quando

A estrutura existe e os imports com `@/` funcionam.

## Commits sugeridos

- `chore: cria estrutura de pastas e alias @/`
