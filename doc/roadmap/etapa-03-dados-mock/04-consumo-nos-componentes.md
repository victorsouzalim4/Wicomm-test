# 3.4 — Consumir os dados nos componentes

## Objetivo

Ligar as seções aos services e tratar os estados de carregamento e erro.

## Passos

- [ ] As seções (`ProductShelf`, `HeroBanner`, `Header`, `Footer`) usam os hooks de dados. Os componentes menores (`ProductCard` etc.) continuam recebendo tudo por props.
- [ ] Estado de carregamento: um skeleton simples no formato do card, para a página não "pular" quando os dados chegam (ajuda no CLS do Lighthouse)
- [ ] Estado de erro: uma mensagem simples no lugar da vitrine
- [ ] Lista vazia: não renderizar a seção

## Pronto quando

Todas as seções mostram dados vindos dos services e lidam com carregamento, erro e lista vazia.

## Commits sugeridos

- `feat: conecta vitrines aos dados de produtos`
- `feat: adiciona skeleton de carregamento nas vitrines`
