# 2.1 — Extrair os design tokens do Figma

## Objetivo

Levar para o `src/styles/_tokens.scss` todos os valores visuais do Figma, para nenhum componente ter cor ou tamanho "solto" no código.

## Passos

- [ ] **Cores:** primária, secundária, textos, fundos, bordas, estados (hover, desabilitado, sucesso, erro)
- [ ] **Tipografia:** famílias, pesos, tamanhos e alturas de linha de cada estilo de texto (títulos, corpo, preço, botão)
- [ ] **Fontes:** carregar as famílias usadas, de preferência self-hosted em WOAFF2 com `font-display: swap` (ajuda na performance)
- [ ] **Espaçamentos:** identificar a escala usada (por exemplo 4, 8, 16, 24, 32...)
- [ ] **Raios de borda e sombras**
- [ ] **Larguras:** largura máxima do container e as larguras dos frames do Figma (desktop e mobile, se houver)
- [ ] **Ícones:** exportar em SVG
- [ ] **Imagens:** exportar na resolução certa (as otimizações ficam para a etapa de performance)

## Pronto quando

O `_tokens.scss` tem todos os valores, com nomes semânticos (`$color-primary`, não `$blue`).

## Commits sugeridos

- `style: adiciona design tokens do Figma`
- `style: adiciona fontes do projeto`
- `chore: adiciona ícones SVG`
