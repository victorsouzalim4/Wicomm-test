# 4.3 — Header e menu mobile

## Objetivo

Adaptar o header para telas pequenas, onde o menu horizontal não cabe.

## Decisões a tomar (se o Figma não mostrar)

- Menu mobile como `Drawer` abrindo da esquerda, acionado por um botão "hambúrguer"
- O que continua visível no header mobile: logo, ícone do carrinho e o botão do menu. A busca vai para dentro do menu ou fica como ícone.
- Header fixo (`sticky`) ou não ao rolar a página

## Passos

- [ ] Botão de menu com `aria-expanded`, `aria-controls` e um texto acessível ("Abrir menu")
- [ ] Ao abrir: foco vai para dentro do menu, a tecla `Esc` fecha, e o foco fica preso no menu enquanto ele estiver aberto
- [ ] Ao fechar: o foco volta para o botão que abriu
- [ ] Travar a rolagem da página enquanto o menu estiver aberto
- [ ] Fechar o menu ao clicar fora dele (no overlay)
- [ ] Registrar as decisões no README

## Pronto quando

O menu funciona no celular com toque e com teclado.

## Commits sugeridos

- `feat: adiciona menu mobile em drawer`
- `feat: adiciona navegação por teclado no menu mobile`
