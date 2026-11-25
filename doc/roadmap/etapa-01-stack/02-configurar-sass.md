# 1.2 — Configurar o Sass

## Objetivo

Deixar o Sass pronto para receber os tokens do Figma e para ser usado com CSS Modules.

## Passos

- [ ] Rodar `npm install -D sass`
- [ ] Criar `src/styles/` com os arquivos:
  - `_tokens.scss`: cores, fontes, tamanhos de fonte, espaçamentos e raios. Os valores vêm do Figma na etapa de layout; por enquanto ficam só os nomes.
  - `_breakpoints.scss`: breakpoints de celular, tablet e desktop, com um mixin `respond-to($breakpoint)`
  - `_mixins.scss`: mixins reaproveitáveis, como `visually-hidden` e `focus-ring`
  - `global.scss`: reset, `box-sizing`, fonte base e estilo de foco visível
- [ ] Importar `global.scss` no `main.tsx`
- [ ] Apagar `App.css` e `index.css`
- [ ] Testar um `*.module.scss` que use `@use '../styles/tokens' as *;`

## Pronto quando

Um componente consegue usar um token via `@use` dentro de um `*.module.scss`, e o build funciona.

## Commits sugeridos

- `chore: adiciona Sass`
- `style: cria estrutura base de estilos (tokens, breakpoints, mixins, global)`
