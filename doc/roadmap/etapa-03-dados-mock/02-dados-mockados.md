# 3.2 — Criar os JSONs da API mock

## Objetivo

Reproduzir em `public/api/*.json` todo o conteúdo do Figma, com as URLs das imagens no Cloudinary.

## Passos

- [x] `src/types/api.ts`: o formato de cada endpoint, que serve de contrato entre os JSONs e o front
- [x] `products.json`: os 5 perfumes, com nome, preço, preço "de", número de parcelas, frete grátis, tags e imagem
- [x] `shelves.json`: as 3 vitrines com título e ids dos produtos, na ordem do Figma
- [x] `banners.json`: `hero` (1), `launches` (3), `haircare` (4) e `reseller` (2), cada um com imagem e link
- [x] `campaign.json`: barra de avisos, ofertas limitadas (com a data de fim do contador) e os 4 itens da barra de vantagens. Não estava na lista original do ADR-0010, mas é conteúdo de campanha que muda com frequência.
- [x] `blog.json`, `causes.json` e `social.json`
- [x] `navigation.json`: Perfumaria, Cabelos, Corpo e Banho, Rosto e Nutricional (com subcategorias de exemplo), Revenda (variante `reseller`, com dropdown) e Promoções (variante `promo`)
- [x] `footer.json`: newsletter, texto institucional, colunas de links, contato, endereços, redes sociais, selo e formas de pagamento
- [x] Toda imagem com `url`, `alt`, `width` e `height` (as dimensões vêm do cabeçalho dos PNGs originais)
- [x] Preços em centavos

## Verificação (25/11/2026)

- Os 9 JSONs são válidos, e as vitrines só apontam para produtos que existem
- As 25 URLs de imagem respondem 200 no Cloudinary
- `npm run dev` serve `/api/products.json` como `application/json`, e o `npm run build` copia `public/api/` para `dist/api/`

## Decisões

As inconsistências do Figma (parcelas, percentual do selo, nomes dos produtos, textos de frete e parcelamento) foram resolvidas e registradas no README, na seção "Interpretações do layout".

## Limitações conhecidas

- **As fotos de produto no Figma têm 184×184px**, menores que a área de 210px do card. Em telas de alta densidade podem ficar levemente borradas.
- **Só há 5 produtos**, então as vitrines repetem os mesmos 5. No desktop cabem os 5 cards, e o carrossel só rola em telas menores.
- **O banner principal tem um único slide.** O carrossel continua pronto para receber mais slides pelo JSON.

## Commits

- `feat: adiciona tipos e JSONs da API mock`
