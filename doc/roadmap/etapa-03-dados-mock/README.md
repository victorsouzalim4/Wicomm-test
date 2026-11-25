# Etapa 3 — Dados: API mock com JSON

## Decisão

**API mock com arquivos JSON** em `public/api/`, buscados com `fetch` por uma camada de service. Os JSONs trazem as URLs das imagens hospedadas no Cloudinary. Detalhes, alternativas e formato dos dados no [ADR-0010](../../adr/0010-api-mock-com-json-estatico.md).

```
public/api/*.json  ──fetch──▶  src/services/  ──▶  src/hooks/ (useProducts...)  ──▶  sections/  ──props──▶  components/
       ▲                                                                                                   │
  URLs do Cloudinary  ◀─────────────────────────── optimizeImage(url, { width }) ◀──────────────────────────┘
```

## Partes

| # | Parte | Status |
| --- | --- | --- |
| 1 | [Fechar a decisão](01-decisao.md) | [x] ADR-0010 |
| 2 | [Criar os JSONs da API mock](02-dados-mockados.md) | [ ] |
| 3 | [Criar a camada de service](03-camada-de-service.md) | [ ] |
| 4 | [Consumir os dados nos componentes](04-consumo-nos-componentes.md) | [ ] |
