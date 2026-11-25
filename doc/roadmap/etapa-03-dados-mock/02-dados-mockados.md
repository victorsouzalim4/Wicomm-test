# 3.2 — Criar os dados mockados

## Objetivo

Reproduzir em dados os produtos, banners e menus que aparecem no Figma.

## Passos

- [ ] `src/data/products.ts`: os produtos das vitrines, com nome, preço, preço antigo e imagem iguais aos do Figma
- [ ] `src/data/banners.ts`: os banners do carrossel principal e os banners secundários
- [ ] `src/data/navigation.ts`: os links do menu e do footer
- [ ] Tipar cada arquivo com os tipos da [parte 2.5](../etapa-02-componentizacao/05-props-e-tipos.md)
- [ ] Escrever um texto alternativo (`alt`) para cada imagem, descrevendo o produto ou o banner
- [ ] Guardar os preços em centavos (`12990` = R$ 129,90) e formatar só na exibição

## Pronto quando

Todo conteúdo que aparece no Figma tem um dado correspondente, e o TypeScript não reclama de nada.

## Commits sugeridos

- `feat: adiciona mock de produtos`
- `feat: adiciona mock de banners e navegação`
