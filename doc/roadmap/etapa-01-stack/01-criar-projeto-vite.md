# 1.1 — Criar o projeto com Vite

## Objetivo

Gerar a base do projeto em React + TypeScript na raiz do repositório.

## Passos

- [ ] Rodar `npm create vite@latest . -- --template react-ts` na raiz. Se o Vite perguntar sobre a pasta não estar vazia (por causa de `doc/`), escolher **ignorar os arquivos existentes**.
- [ ] Rodar `npm install`
- [ ] Rodar `npm run dev` e conferir se a página padrão abre
- [ ] Remover o boilerplate do template: o contador do `App.tsx`, os logos em `src/assets/` e `public/`, e o conteúdo de `App.css` e `index.css`
- [ ] Ajustar o `index.html`: `lang="pt-BR"`, `<title>` e `<meta name="description">`
- [ ] Conferir se o `.gitignore` inclui `node_modules/` e `dist/`

## Pronto quando

`npm run dev` sobe uma página em branco, sem nada sobrando do template.

## Commits sugeridos

- `chore: cria projeto com Vite, React e TypeScript`
- `chore: remove boilerplate do template`
