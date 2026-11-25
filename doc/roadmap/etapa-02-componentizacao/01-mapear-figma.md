# 2.1 — Mapear o Figma

## Objetivo

Levantar do Figma tudo o que o código vai precisar, antes de escrever qualquer componente.

## Passos

- [ ] Listar as **seções** da página, de cima para baixo, com o nome que vão ter no código
- [ ] Marcar os **elementos repetidos** (aparecem em mais de um lugar) → candidatos a componente
- [ ] Extrair os **tokens** para o `_tokens.scss`:
  - [ ] Cores (hex), com nomes por função (`$color-primary`, `$color-text`...), não por aparência
  - [ ] Fontes: família, pesos e tamanhos usados
  - [ ] Espaçamentos e larguras: container, gaps, paddings das seções
  - [ ] Raios de borda e sombras
- [ ] Verificar se existe **versão mobile ou tablet** no Figma. Se não existir, as decisões ficam para a [Etapa 4](../etapa-04-mobile/README.md) e vão para o README.
- [ ] Anotar os **estados** que aparecem (hover, ativo, desabilitado, carrinho vazio...) e os que **não** aparecem, que viram decisões nossas
- [ ] Exportar os **assets**: imagens em boa resolução e ícones em SVG

## Pronto quando

Existe uma lista de seções, uma lista de componentes candidatos e os tokens preenchidos.

## Commits sugeridos

- `style: adiciona tokens de cor, tipografia e espaçamento do Figma`
- `chore: adiciona assets exportados do Figma`
