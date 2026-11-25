# 3.2 — Criar os JSONs da API mock

## Objetivo

Reproduzir em `public/api/*.json` todo o conteúdo do Figma, com as URLs das imagens no Cloudinary.

## Passos

- [ ] `products.json`: os 5 perfumes (Athena, Fortune, RB, DB, Chic) com nome, preço, preço "de", parcelas, tags ("FRETE GRÁTIS", cupom) e imagem
- [ ] `shelves.json`: as 3 vitrines com título e ids dos produtos, na ordem do Figma
- [ ] `banners.json`: `hero` (1), `launches` (3), `haircare` (4), `reseller` (2), cada um com imagem e link
- [ ] `blog.json`, `causes.json`, `social.json`
- [ ] `navigation.json`: Perfumaria, Cabelos, Corpo e Banho, Rosto, Nutricional (com subitens), Revenda (dropdown "Consultor") e Promoções
- [ ] `footer.json`: colunas de links, telefone, e-mail, endereços, redes sociais e formas de pagamento
- [ ] Toda imagem com `url`, `alt`, `width` e `height` (formato no ADR-0010)
- [ ] Preços em centavos

## Atenção: inconsistência no Figma

Os cards mostram "R$ 255" e "12x R$ 18,75 sem juros", mas 12 × 18,75 = R$ 225. Decidir qual valor vale (sugestão: calcular as parcelas a partir do preço, `255 / 12 = R$ 21,25`) e registrar no README.

## Pronto quando

Cada `/api/*.json` abre no navegador com `npm run dev`, e todas as URLs de imagem respondem 200.

## Commits sugeridos

- `feat: adiciona API mock de produtos e vitrines`
- `feat: adiciona API mock de banners, blog, causas e redes sociais`
- `feat: adiciona API mock de navegação e footer`
