# 2.5 — Árvore de componentes e estado

## Objetivo

Desenhar quem renderiza quem e onde cada estado fica, para evitar prop drilling e estado duplicado.

## Árvore (proposta)

```
<CartProvider>
  <App>
    <Header>
      <Menu />
      <CartButton />        → abre o MiniCart, mostra o Badge
    </Header>
    <main>
      <HeroBanner>
        <Carousel />
      </HeroBanner>
      <ProductShelf>        → reaproveitada N vezes
        <Carousel>
          <ProductCard />   → addItem()
        </Carousel>
      </ProductShelf>
      ...outras seções
    </main>
    <Footer />
    <MiniCart>              → dentro do Drawer
      <CartItem />
    </MiniCart>
  </App>
</CartProvider>
```

## Onde fica cada estado

| Estado | Onde | Por quê |
| --- | --- | --- |
| Itens do carrinho | `CartContext` (`useReducer`) | Usado pelo Header (badge), pelo ProductCard (adicionar) e pelo MiniCart |
| Mini cart aberto/fechado | `CartContext` | O ProductCard abre o mini cart ao adicionar um item |
| Slide atual do carrossel | Local no `Carousel` | Ninguém mais precisa dele |
| Menu mobile aberto/fechado | Local no `Header` | Só o header usa |

## Ações do carrinho (reducer)

`ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QUANTITY`, `CLEAR`. Os valores derivados (`totalItems`, `subtotal`) são calculados a partir dos itens e não são guardados no estado.

## Passos

- [ ] Validar a árvore com as seções finais
- [ ] Definir a interface do `CartContext` (o que o `useCart()` expõe)

## Pronto quando

Todo estado tem dono e todo componente sabe de onde vêm seus dados.

## Commits sugeridos (ao fim da etapa)

- `docs: documenta componentização e árvore de componentes`
