# 1.4 — Configurar Vitest e Testing Library

## Objetivo

Deixar o ambiente de testes pronto. Os testes de verdade (a lógica do carrinho) entram na etapa do carrinho.

## Passos

- [ ] Rodar `npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event`
- [ ] No `vite.config.ts`, adicionar o bloco `test`:
  - `environment: 'jsdom'`
  - `globals: true`
  - `setupFiles: './src/setupTests.ts'`
- [ ] Criar `src/setupTests.ts` com `import '@testing-library/jest-dom';`
- [ ] Adicionar `"vitest/globals"` em `compilerOptions.types` no `tsconfig.app.json`
- [ ] Adicionar o script `"test": "vitest"` no `package.json`
- [ ] Escrever um teste simples, que renderiza o `App` e verifica se ele aparece, só para validar a configuração

## Pronto quando

`npm run test` roda e o teste passa.

## Commits sugeridos

- `test: configura Vitest e Testing Library`
