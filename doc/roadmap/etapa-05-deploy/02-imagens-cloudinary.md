# 5.2 — Hospedar as imagens no Cloudinary

## Objetivo

Subir as imagens de conteúdo do Figma para o Cloudinary e usá-las por URL, como definido no [ADR-0008](../../adr/0008-imagens-hospedadas-externamente.md).

## Passos

- [ ] Criar a conta gratuita no Cloudinary (feito pela pessoa dona do projeto)
- [ ] Exportar as imagens de conteúdo do Figma em 2x (lista no [inventário](../etapa-02-componentizacao/07-inventario-de-imagens.md))
- [ ] Subir as imagens pelo painel (Media Library), numa pasta `wicomm-test/`, com nomes descritivos (`hero-perfume-100ml`, `produto-athena`...)
- [ ] Colocar o *cloud name* no `.env` como `VITE_CLOUDINARY_CLOUD_NAME`, e criar o `.env.example` com a variável vazia
- [ ] Configurar a mesma variável na Vercel (Settings → Environment Variables)
- [ ] Criar o helper `buildImageUrl(publicId, { width })` em `src/utils/`, que monta `https://res.cloudinary.com/<cloud>/image/upload/f_auto,q_auto,w_<largura>/<publicId>`
- [ ] Adicionar `<link rel="preconnect" href="https://res.cloudinary.com">` no `index.html`

## Pronto quando

Todas as imagens de conteúdo carregam do Cloudinary, em WebP/AVIF e no tamanho certo para cada tela.

## Commits sugeridos

- `feat: adiciona helper de URL de imagens do Cloudinary`
- `chore: adiciona variável de ambiente do Cloudinary`
