# 3.3 — Criar a camada de service

## Objetivo

Isolar o acesso à API em um só lugar. Os componentes não sabem que os dados vêm de um JSON.

## Rascunho

```ts
// src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL ?? '/api';

export async function fetchJson<T>(path: string, validate: (data: unknown) => data is T): Promise<T> {
  const response = await fetch(`${API_URL}/${path}`);
  if (!response.ok) throw new Error(`Erro ${response.status} ao buscar ${path}`);
  const data: unknown = await response.json();
  if (!validate(data)) throw new Error(`Formato inválido em ${path}`);
  return data;
}

// src/services/productService.ts
export const getProducts = () => fetchJson('products.json', isProductList);
```

```ts
// src/utils/optimizeImage.ts — insere as transformações do Cloudinary na URL vinda da API
export function optimizeImage(url: string, { width }: { width: number }) {
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
}
```

## Passos

- [ ] `src/services/api.ts` com `fetchJson` (erro HTTP + validação)
- [ ] Um service por recurso (`productService`, `bannerService`...), com as funções de validação (type guards) em `src/services/validators.ts`
- [ ] Simular um pequeno atraso (~300ms) só em desenvolvimento, para o estado de carregamento aparecer como numa API real
- [ ] Hooks em `src/hooks/` (`useProducts`, `useBanners`...) que devolvem `{ data, isLoading, error }`
- [ ] `optimizeImage` em `src/utils/`, usado para montar `src` e `srcset`
- [ ] `VITE_API_URL` documentada no `.env.example`
- [ ] Testes: `fetchJson` (sucesso, erro HTTP, JSON inválido), `optimizeImage` e um hook

## Pronto quando

Nenhum componente chama `fetch` nem conhece `/api`: tudo passa pelos services e hooks.

## Commits sugeridos

- `feat: adiciona cliente da API mock com validação`
- `feat: adiciona services e hooks de dados`
- `feat: adiciona helper de otimização de imagens do Cloudinary`
- `test: testa cliente da API e helper de imagens`
