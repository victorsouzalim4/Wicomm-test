# 3.3 — Criar a camada de service

## Objetivo

Isolar o acesso à API em um só lugar. Os componentes não sabem que os dados vêm de um JSON.

## Como ficou

```
storeService.getProducts()  ──▶  api.getJson()  ──cache──▶  api.fetchJson()  ──fetch──▶  /api/products.json
                                                                   │
                                                     validators.isProductsResponse()
```

| Arquivo | Responsabilidade |
| --- | --- |
| `src/services/api.ts` | `fetchJson`: chama o endpoint, trata erro HTTP, erro de rede e JSON inválido, e valida o formato. `getJson`: guarda a requisição de cada endpoint (as 3 vitrines pedem `products.json`, e a rede é chamada uma vez só). Se a requisição falhar, ela sai do cache. Atraso de 300ms só em desenvolvimento. |
| `src/services/validators.ts` | Um validador por resposta, montados com `hasShape<T>()`. O molde exige todos os campos do tipo: esquecer um campo é **erro de compilação** (testado: sem `height`, o `tsc` acusa TS2741). |
| `src/services/storeService.ts` | Uma função por recurso (`getProducts`, `getBanners`...). É o único arquivo que conhece os nomes dos endpoints. |
| `src/hooks/useApi.ts` | Liga uma função de serviço à interface: `{ data, isLoading, error }`. Ignora a resposta se o componente já saiu da tela. |
| `src/hooks/useStoreData.ts` | Um hook por recurso (`useProducts`, `useBanners`...), usados pelas seções |
| `src/utils/image.ts` | `optimizeImage(url, { width })` e `buildSrcSet(url, larguras)`: transformações do Cloudinary na URL vinda da API |
| `src/utils/price.ts` | `formatPrice`, `installmentValue` e `discountPercent`: os valores derivados do preço |
| `src/vite-env.d.ts` e `.env.example` | Tipagem e exemplo da variável `VITE_API_URL` (padrão `/api`) |

## Passos

- [x] `fetchJson` com erro HTTP, erro de rede, JSON inválido e validação
- [x] Cache por endpoint, com nova tentativa depois de falha
- [x] Validadores para os 9 endpoints
- [x] Serviços e hooks por recurso
- [x] Atraso simulado em desenvolvimento
- [x] `optimizeImage` e `buildSrcSet`
- [x] Utilitários de preço (parcelas e desconto calculados)
- [x] `VITE_API_URL` tipada e documentada no `.env.example`
- [x] Testes: 35 casos novos (cliente da API, cache, validadores com os JSONs reais e com dados inválidos, hook, preço e imagem)

## Pronto quando

Nenhum componente chama `fetch` nem conhece `/api`: tudo passa pelos services e hooks.

## Commits

- `feat: adiciona cliente da API mock com validação e cache`
- `feat: adiciona hooks de dados`
- `feat: adiciona utilitários de preço e de imagem`
