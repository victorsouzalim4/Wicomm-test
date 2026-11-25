# 3.3 — Criar a camada de serviço

## Objetivo

Isolar o acesso aos dados em um só lugar, simulando uma API.

## Proposta

```ts
// src/services/productService.ts
import { products } from '@/data/products';
import type { Product } from '@/types/product';

const MOCK_DELAY_MS = 300;

export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), MOCK_DELAY_MS);
  });
}
```

O mesmo vale para `bannerService.ts`.

## Pontos de atenção

- Os componentes **nunca** importam de `data/` diretamente. Sempre passam pelo serviço (via hook).
- Para trocar por uma API real, basta substituir o corpo de `getProducts()` por um `fetch`.
- O atraso simulado é curto, para não piorar a experiência nem a nota do Lighthouse.

## Passos

- [ ] Criar `src/services/productService.ts`
- [ ] Criar `src/services/bannerService.ts`
- [ ] Escrever um teste simples do serviço (devolve a lista esperada)

## Commits sugeridos

- `feat: cria camada de serviço com dados mockados`
- `test: adiciona testes dos serviços`
