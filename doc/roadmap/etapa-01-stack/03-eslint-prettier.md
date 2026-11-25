# 1.3 — Configurar linter e Prettier

> O nome do arquivo ficou do plano original (ESLint). O linter escolhido foi o **oxlint**: veja o [ADR-0011](../../adr/0011-linter-oxlint.md).

## Objetivo

Padronizar o código e pegar erros, sobras e problemas de acessibilidade automaticamente.

## Passos

- [x] Prettier + `prettier-plugin-tailwindcss`, com `.prettierrc` e `.prettierignore`
- [x] Scripts `format` e `format:check`
- [x] oxlint (já veio no template) com os plugins `react`, `typescript`, `oxc`, `jsx-a11y` e `vitest` no `.oxlintrc.json`
- [x] Validar que as regras de acessibilidade funcionam (testado com imagem sem `alt`, link inválido e `div` clicável)

## Pronto quando

`npm run lint` e `npm run format:check` passam sem erros.

## Commits

- `chore: configura Prettier com ordenação de classes do Tailwind`
- `chore: ativa regras de acessibilidade e de testes no oxlint`
