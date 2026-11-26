# 5.1 — Primeiro deploy na Vercel

## Objetivo

Publicar a página em branco logo no começo, para validar o caminho até a produção antes de ter código importante.

## Passos

- [x] Criar o repositório **público** no GitHub e fazer o push da `main`
- [x] Na Vercel, importar o repositório. O preset **Vite** é detectado sozinho, com build `npm run build` e saída `dist`.
- [x] Conferir se a URL publicada abre a página
- [x] Colocar o link da página publicada no README

## Resultado (25/11/2026)

- Página publicada: https://wicomm-test-weld.vercel.app
- A página, os JSONs da API mock (`/api/*.json`), as imagens do Cloudinary e o carrinho foram conferidos na URL publicada

## Pronto quando

Cada push na `main` gera um deploy automático e o link funciona.

## Commits sugeridos

- `docs: adiciona link do deploy no README`
