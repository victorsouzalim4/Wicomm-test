# 4.1 — Definir breakpoints e estratégia

## Objetivo

Fechar os pontos em que o layout muda e deixar isso num mixin único.

## Sugestão inicial (ajustar às larguras dos frames do Figma)

| Nome | A partir de | Dispositivo |
| --- | --- | --- |
| base | 0 | Celular |
| `md` | 768px | Tablet |
| `lg` | 1024px | Notebook |
| `xl` | 1280px | Desktop (largura total do Figma) |

## Passos

- [ ] Conferir as larguras dos frames do Figma e ajustar a tabela
- [ ] Escrever os breakpoints e o mixin `respond-to` em `src/styles/_breakpoints.scss`
- [ ] Nunca escrever `@media` com número solto nos componentes: sempre usar o mixin
- [ ] Registrar no README quais telas existiam no Figma e quais foram decisão nossa

## Pronto quando

Os breakpoints estão no código e todos os componentes usam o mixin.

## Commits sugeridos

- `style: define breakpoints e mixin respond-to`
