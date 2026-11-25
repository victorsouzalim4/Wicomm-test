# 3.1 — Modelar os tipos

## Objetivo

Definir em TypeScript o formato dos dados, com base no que o Figma mostra em cada card e banner.

## Proposta (ajustar ao Figma)

```ts
// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  image: { src: string; alt: string };
  price: number;          // preço atual, em reais
  listPrice?: number;     // preço "de", se o Figma mostrar desconto
  installments?: { count: number; value: number };
}

// src/types/cart.ts
export interface CartItem {
  product: Product;
  quantity: number;
}

// src/types/banner.ts
export interface Banner {
  id: string;
  image: { desktop: string; mobile: string; alt: string };
  link?: string;
}
```

## Pontos de atenção

- O `alt` faz parte do dado. Assim nenhuma imagem fica sem texto alternativo.
- Os preços ficam em `number`. A formatação é responsabilidade do componente `Price`.

## Passos

- [ ] Conferir os campos com o que aparece no Figma
- [ ] Criar os arquivos em `src/types/`

## Commits sugeridos

- `feat: adiciona tipos de produto, carrinho e banner`
