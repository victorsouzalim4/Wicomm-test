# 1.3 — Configurar ESLint e Prettier

## Objetivo

Padronizar o código e pegar erros e sobras automaticamente.

## Passos

- [ ] Conferir o ESLint que já vem no template do Vite (`eslint.config.js`)
- [ ] Rodar `npm install -D prettier eslint-config-prettier`
- [ ] Adicionar `eslint-config-prettier` no fim do `eslint.config.js`, para o ESLint não brigar com o Prettier
- [ ] Criar `.prettierrc` com o padrão do projeto. Sugestão: `singleQuote: true`, `semi: true`, `trailingComma: "all"`, `printWidth: 100`
- [ ] Criar `.prettierignore` (`dist`, `node_modules`, `doc/*.pdf`)
- [ ] Adicionar os scripts no `package.json`:
  - `"lint": "eslint ."`
  - `"format": "prettier --write ."`
- [ ] Opcional: adicionar o plugin `eslint-plugin-jsx-a11y`, que aponta problemas de acessibilidade no JSX

## Pronto quando

`npm run lint` e `npm run format` rodam sem erros.

## Commits sugeridos

- `chore: configura Prettier integrado ao ESLint`
- `chore: adiciona regras de acessibilidade no ESLint` (se fizer a parte opcional)
