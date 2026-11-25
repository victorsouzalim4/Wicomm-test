# 4.1 — Definir os breakpoints

## Proposta

| Nome | A partir de | Referência |
| --- | --- | --- |
| `mobile` | 0 (base) | Celulares (375px como referência) |
| `tablet` | 768px | Tablets em retrato |
| `desktop` | 1024px | Notebooks e tablets em paisagem |
| `wide` | largura do frame do Figma (ex.: 1440px) | Só se o layout mudar nesse ponto |

## Pontos de atenção

- Os breakpoints seguem o **conteúdo**: se algo quebra em 900px, ajustamos ali, mesmo fora da tabela.
- O container tem `max-width` igual ao do Figma e padding lateral menor no celular.
- Nada pode gerar **scroll horizontal** em nenhuma largura.

## Passos

- [ ] Ajustar os valores ao Figma
- [ ] Preencher `_breakpoints.scss` e o mixin `respond-to()`

## Commits sugeridos

- `style: define breakpoints e mixin respond-to`
