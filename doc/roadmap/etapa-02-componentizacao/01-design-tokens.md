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

## Valores já coletados no Figma

| Token | Valor | Onde aparece |
| --- | --- | --- |
| Fonte principal | Poppins: 300, 500, 600, 700 | Todo o texto |
| Fonte secundária | Inter 500 | Só no selo de desconto. Avaliar trocar por Poppins para carregar uma fonte a menos. |
| Amarelo (primária) | `#FFB802` | Selo de desconto, "FRETE GRÁTIS", botões de busca e de conta, "CADASTRAR" |
| Salmão | `#F3A07A` | Fundo da barra de avisos |
| Preto / branco | `#000000` / `#FFFFFF` | Textos, botão "COMPRAR", fundos de card |
| Cinzas de fundo | `#F0F0F0` (Gray-4), `#F5F5F5`, `#EEEEEE` | Ofertas, vantagens, causas e footer |
| Paleta Yellow 50–900 | estilos de cor do Figma | Ler os valores hex de cada tom |
| Raio | 8px (card), 4px (selo) | |
| Sombra do card | `0 0 4px rgba(0,0,0,.15)` | `ProductCard` |
| Sombra do header | `0 1px 2px rgba(0,0,0,.25)` | `Header` |
| Sombra do dropdown | `0 2px 4px rgba(0,0,0,.25)` | `Dropdown` |
| Largura do frame | 1280px | |
| Largura do conteúdo | 1168px (56px de margem lateral) | `Container` |

## Pronto quando

O `_tokens.scss` tem todos os valores, com nomes semânticos (`$color-primary`, não `$blue`).

## Commits sugeridos

- `style: adiciona design tokens do Figma`
- `style: adiciona fontes do projeto`
- `chore: adiciona ícones SVG`
