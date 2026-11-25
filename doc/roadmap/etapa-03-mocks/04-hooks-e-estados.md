# 3.4 — Criar os hooks e os estados de tela

## Objetivo

Expor os dados para as seções com os estados de carregamento e erro.

## Proposta

```ts
// src/hooks/useProducts.ts
// devolve { data, isLoading, error }
```

## Estados de tela

| Estado | O que mostrar | Observação |
| --- | --- | --- |
| Carregando | Skeleton no formato do card ou do banner | Evita salto de layout (CLS), o que conta no Lighthouse |
| Erro | Mensagem simples | Não aparece no Figma: decisão nossa, registrar no README |
| Sucesso | Conteúdo do Figma | — |

## Passos

- [ ] Criar `useProducts` e `useBanners`. Se a lógica se repetir, extrair um hook genérico `useAsync`.
- [ ] Criar os componentes de skeleton
- [ ] Usar os hooks nas seções (`HeroBanner`, `ProductShelf`)

## Pronto quando

As seções recebem os dados pelos hooks e mostram skeleton enquanto carregam.

## Commits sugeridos

- `feat: adiciona hooks de dados com estados de carregamento e erro`
- `feat: adiciona skeletons de carregamento`
