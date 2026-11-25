# 2.4 — Componentes de interação

## Objetivo

Definir os componentes com comportamento, que são os que mais pesam no critério "Interações e funcionalidades".

## Componentes

### `ProductCard`

- Imagem, nome, `Price` e botão "Adicionar ao carrinho"
- Hover conforme o Figma. Se o Figma não mostrar hover, decidimos um e registramos no README.
- Ao adicionar: chama `addItem` do carrinho e abre o mini cart

### `Carousel`

- Genérico: recebe `children` ou uma lista de itens e um número de itens visíveis por breakpoint
- Setas anterior/próximo como `<button>` com `aria-label`
- Opcional: indicadores (bolinhas), autoplay que pausa no hover e no foco
- Funciona no teclado e com swipe no celular (ver a [Etapa 4](../etapa-04-mobile/README.md))
- É reaproveitado no `HeroBanner` e no `ProductShelf`

### `Drawer`

- Painel lateral genérico: overlay, fecha com `Esc`, com clique fora e com o botão de fechar
- Foco preso dentro do painel enquanto está aberto e devolvido ao botão que abriu ao fechar
- `role="dialog"` + `aria-modal="true"` + `aria-labelledby`
- É reaproveitado no `MiniCart` e no menu mobile

### `MiniCart`

- Abre no `Drawer`
- Lista de `CartItem` (imagem, nome, `QuantitySelector`, preço, remover)
- Subtotal e botão de finalizar
- Estado vazio, com mensagem

### `Menu`

- Navegação do header, com submenu se o Figma tiver
- No desktop: hover e foco. No mobile: dentro do `Drawer`.

## Passos

- [ ] Confirmar quais interações o Figma sugere
- [ ] Definir as props e os eventos de cada componente
- [ ] Listar as decisões de comportamento que o Figma não mostra, para registrar no README

## Pronto quando

Cada interação tem um componente responsável e o comportamento está descrito.
