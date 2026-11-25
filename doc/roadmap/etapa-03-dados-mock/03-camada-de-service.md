# 3.3 — Criar a camada de service

## Objetivo

Isolar o acesso aos dados em um só lugar. Os componentes pedem os dados ao service e não sabem se eles vêm de um arquivo ou de uma API.

## Rascunho

```ts
// src/services/productService.ts
import { products } from '@/data/products';
import type { Product } from '@/types';

export async function getProducts(): Promise<Product[]> {
  return products;
}
```

## Passos

- [ ] Criar `src/services/` com um service por tipo de dado (produtos, banners, navegação)
- [ ] Simular um pequeno atraso (por exemplo, 300ms) no service, para o estado de carregamento aparecer como numa API real
- [ ] Criar o hook `useProducts()` em `src/hooks/`, que chama o service e devolve `{ data, isLoading, error }`
- [ ] Escrever um teste do service e do hook

## Pronto quando

Nenhum componente importa nada de `src/data/` diretamente. Tudo passa pelos services.

## Commits sugeridos

- `feat: adiciona camada de service para os dados`
- `feat: adiciona hook useProducts`
- `test: testa service e hook de produtos`
