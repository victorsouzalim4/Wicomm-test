# 4.2 — Header e menu mobile

## Proposta

- **Celular:** logo centralizado, ícone de menu (hamburguer) à esquerda, carrinho à direita. A busca, se existir, vira ícone ou linha abaixo.
- **Menu:** abre no `Drawer` (o mesmo componente do mini cart), com os links empilhados e submenus em acordeão.
- **Desktop:** menu horizontal, como no Figma.

## Acessibilidade

- O botão do menu tem `aria-label="Abrir menu"`, `aria-expanded` e `aria-controls`
- Fecha com `Esc` e devolve o foco ao botão
- Alvos de toque com no mínimo **44×44px**

## Passos

- [ ] Implementar o botão hamburguer (visível só abaixo de `desktop`)
- [ ] Reaproveitar o `Drawer` para o menu
- [ ] Testar a navegação pelo teclado

## Commits sugeridos

- `feat: adiciona menu mobile no drawer`
- `style: adapta header para celular e tablet`
