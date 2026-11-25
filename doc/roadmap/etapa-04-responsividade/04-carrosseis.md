# 4.4 — Carrosséis responsivos e touch

## Objetivo

Fazer os carrosséis funcionarem bem em qualquer tela e com toque.

## Decisões a tomar (se o Figma não mostrar)

| Carrossel | Celular | Tablet | Desktop |
| --- | --- | --- | --- |
| Vitrine de produtos | ~1,5 card (o card cortado mostra que dá para arrastar) | 2 a 3 cards | O que o Figma mostrar |
| Banner principal | 1 banner, imagem mobile | 1 banner | 1 banner |

## Passos

- [ ] Itens por tela controlados por CSS (custom property mudando nos breakpoints), não por JavaScript
- [ ] Arrastar com o dedo. Sugestão: CSS `scroll-snap`, que dá touch nativo sem código extra.
- [ ] No celular, esconder as setas e mostrar só as bolinhas (decisão a registrar no README)
- [ ] Setas e bolinhas como `<button>`, com rótulos ("Próximo", "Ir para o slide 2")
- [ ] Se houver autoplay: pausar no hover e no foco, e respeitar `prefers-reduced-motion`

## Pronto quando

Os carrosséis funcionam com toque, mouse e teclado em todas as larguras.

## Commits sugeridos

- `feat: adiciona suporte a touch no carrossel`
- `style: ajusta itens por tela do carrossel por breakpoint`
