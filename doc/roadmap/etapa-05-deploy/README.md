# Etapa 5 — Deploy e hosting

## Objetivo

Publicar a página e hospedar tudo o que ela consome, para o avaliador abrir um link e ver tudo funcionando (o teste pede o link da página publicada).

## Onde fica cada coisa

| O quê | Onde | Registro |
| --- | --- | --- |
| Página (build do Vite) | Vercel | [ADR-0003](../../adr/0003-typescript-vite-vitest-vercel.md) |
| Imagens de conteúdo | Cloudinary | [ADR-0008](../../adr/0008-imagens-hospedadas-externamente.md) |
| Código | GitHub (repositório público) | Exigido pelo teste |

## Partes

| # | Parte | Status |
| --- | --- | --- |
| 1 | [Primeiro deploy na Vercel](01-deploy-vercel.md) (fazer cedo, logo depois da etapa 1) | [x] |
| 2 | [Hospedar as imagens no Cloudinary](02-imagens-cloudinary.md) | [x] |
| 3 | [Verificação final da página publicada](03-verificacao-final.md) | [ ] |
