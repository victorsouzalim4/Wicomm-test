# 2.5 — Definir props e tipos

## Objetivo

Escrever os tipos TypeScript que os componentes compartilham e as props dos principais componentes.

## Tipos compartilhados (`src/types/`)

```ts
// Rascunho: os campos finais dependem do que o card do Figma mostra
interface Product {
  id: string;
  name: string;
  image: { src: string; alt: string };
  price: number;          // em centavos, para evitar erro de arredondamento
  listPrice?: number;     // preço "de", quando houver desconto
  installments?: { count: number; value: number };
}

interface CartItem {
  product: Product;
  quantity: number;
}
```

## Passos

- [ ] Ajustar `Product` aos campos que o card do Figma mostra (sem campos sobrando)
- [ ] Escrever a interface de props de `Button`, `ProductCard`, `Carousel`, `Drawer` e `Price`
- [ ] Definir as ações do carrinho para o `useReducer`: `ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QUANTITY`, `OPEN_CART`, `CLOSE_CART`

## Pronto quando

Os tipos estão em `src/types/` e o build passa.

## Commits sugeridos

- `feat: adiciona tipos de produto e carrinho`
