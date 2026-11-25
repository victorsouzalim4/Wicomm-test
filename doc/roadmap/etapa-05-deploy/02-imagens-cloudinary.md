# 5.2 — Hospedar as imagens no Cloudinary

## Objetivo

Subir as imagens de conteúdo do Figma para o Cloudinary e usá-las por URL, como definido no [ADR-0008](../../adr/0008-imagens-hospedadas-externamente.md).

## Passos

- [x] Criar a conta gratuita no Cloudinary. *Cloud name:* `ycsxevam` (é público: aparece em todas as URLs)
- [x] Exportar as imagens de conteúdo do Figma (lista no [inventário](../etapa-02-componentizacao/07-inventario-de-imagens.md))
- [x] Subir as 25 imagens na pasta `wicomm-test/` da Media Library. Com as pastas dinâmicas, o *public ID* é o próprio nome do arquivo, sem a pasta (por exemplo `produto-athena`). Todas conferidas com resposta 200.
- [ ] Colocar o *cloud name* no `.env` como `VITE_CLOUDINARY_CLOUD_NAME`, e criar o `.env.example` com a variável vazia
- [ ] Configurar a mesma variável na Vercel (Settings → Environment Variables)
- [ ] Criar o helper `buildImageUrl(publicId, { width })` em `src/utils/`, que monta `https://res.cloudinary.com/<cloud>/image/upload/f_auto,q_auto,w_<largura>/<publicId>`
- [ ] Adicionar `<link rel="preconnect" href="https://res.cloudinary.com">` no `index.html`

## Teste da otimização (25/11/2026)

| URL | Formato | Tamanho |
| --- | --- | --- |
| `.../image/upload/cronograma-home-spa` | PNG original | 2,4 MB |
| `.../image/upload/f_auto,q_auto,w_400/cronograma-home-spa` | WebP | 32 KB |

## Pronto quando

Todas as imagens de conteúdo carregam do Cloudinary, em WebP/AVIF e no tamanho certo para cada tela.

## Commits sugeridos

- `feat: adiciona helper de URL de imagens do Cloudinary`
- `chore: adiciona variável de ambiente do Cloudinary`
