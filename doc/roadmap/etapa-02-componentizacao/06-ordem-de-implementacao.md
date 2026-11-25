# 2.6 — Definir a ordem de implementação

## Objetivo

Implementar de baixo para cima: primeiro as peças pequenas, depois as seções que as usam. Assim cada commit entrega algo que funciona.

## Ordem sugerida

1. **Componentes base:** `Container`, `Icon`, `Button`, `Price`, `SectionTitle`
2. **Componentes compostos:** `ProductCard`, `Carousel`, `Drawer`, `QuantitySelector`
3. **Seções estáticas:** `Header`, `HeroBanner`, `ProductShelf`, `Newsletter`, `Footer`
4. **Estado do carrinho:** `CartContext`, reducer e testes do reducer
5. **Interações:** botão comprar, `CartButton` com contador, `MiniCart` abrindo e atualizando, menu mobile
6. **Acabamento:** hovers, transições, foco visível, navegação pelo teclado

## Passos

- [ ] Revisar a ordem depois do mapeamento do Figma
- [ ] Criar as próximas etapas do roadmap a partir dessa ordem

## Pronto quando

A ordem está fechada e as próximas etapas estão criadas.

## Commits sugeridos

- `docs: define ordem de implementação`
