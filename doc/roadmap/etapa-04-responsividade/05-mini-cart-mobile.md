# 4.5 — Mini cart no mobile

## Objetivo

Adaptar o carrinho lateral para telas pequenas.

## Decisões a tomar (se o Figma não mostrar)

- No celular o mini cart ocupa a largura inteira da tela. No desktop fica com a largura do Figma (por exemplo, ~400px).
- O resumo (subtotal e botão de finalizar) fica fixo no rodapé do mini cart, e a lista de itens rola por cima dele.

## Passos

- [ ] Largura `100%` no celular e a largura do Figma a partir do breakpoint `md`
- [ ] Lista de itens com rolagem própria e o resumo sempre visível
- [ ] Botões de quantidade e de remover com pelo menos 44×44px
- [ ] Mesmo comportamento de acessibilidade do menu mobile (foco preso, `Esc` fecha, foco volta ao botão do carrinho). O `Drawer` é o mesmo componente, então isso vem de graça.
- [ ] Registrar as decisões no README

## Pronto quando

Dá para adicionar, alterar a quantidade e remover itens no celular sem dificuldade.

## Commits sugeridos

- `style: adapta mini cart para mobile`
