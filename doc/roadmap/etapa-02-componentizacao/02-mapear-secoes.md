# 2.2 — Mapear as seções da página

## Objetivo

Listar os blocos da página, de cima para baixo, e escolher a tag semântica de cada um.

## Hipótese inicial (revisar com o Figma)

| Seção | Tag semântica | Observações |
| --- | --- | --- |
| Barra de avisos (topbar) | `<aside>` ou `<div role="region">` | Frete grátis, promoções. Pode ser um carrossel de textos. |
| Header | `<header>` | Logo, menu, busca, ícone do carrinho com contador |
| Menu de navegação | `<nav>` | Desktop: menu horizontal ou dropdown. Mobile: menu lateral. |
| Banner principal | `<section>` | Pode ser um carrossel de banners |
| Vitrine(s) de produtos | `<section>` com `<h2>` | Carrossel de cards de produto, com o botão "comprar" |
| Banners secundários / categorias | `<section>` | |
| Newsletter | `<section>` com `<form>` | |
| Footer | `<footer>` | Links, redes sociais, formas de pagamento |
| Mini cart | `<aside>` com `role="dialog"` | Fica fora do fluxo e abre por cima da página |

## Passos

- [ ] Abrir o Figma e listar as seções reais
- [ ] Anotar quais seções se repetem com conteúdo diferente (por exemplo, duas vitrines com títulos diferentes = **um** componente de vitrine)
- [ ] Garantir que a página tenha um único `<h1>` e uma hierarquia de títulos sem pular nível

## Pronto quando

A tabela reflete o Figma de verdade.

## Commits sugeridos

- `docs: mapeia seções do layout`
