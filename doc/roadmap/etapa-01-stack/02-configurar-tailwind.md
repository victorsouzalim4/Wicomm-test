# 1.2 — Configurar o Tailwind

## Objetivo

Deixar o Tailwind (v4) funcionando e pronto para receber os tokens do Figma.

## Passos

- [ ] Rodar `npm install tailwindcss @tailwindcss/vite`
- [ ] Adicionar o plugin `tailwindcss()` no `vite.config.ts`
- [ ] No `src/index.css`, deixar só `@import "tailwindcss";` e o bloco de tema
- [ ] Criar o bloco `@theme` no `index.css`, com os nomes dos tokens. Os valores vêm do Figma na etapa 2.
  ```css
  @theme {
    --color-primary: /* Figma */;
    --font-sans: /* Figma */;
    --breakpoint-md: 48rem; /* ajustar às larguras dos frames do Figma */
  }
  ```
- [ ] Adicionar os estilos base em `@layer base`: fonte padrão e foco visível (`focus-visible`) para a navegação pelo teclado
- [ ] Apagar o `App.css` do template
- [ ] Testar uma classe de token num componente (por exemplo, `bg-primary`) e rodar o build

## Regras de uso (do [ADR-0002](../../adr/0002-react-e-tailwind.md))

- Nenhum valor solto nos componentes (`text-[#1a2b3c]`, `mt-[13px]`): se o Figma usa, vira token no `@theme`
- Classes repetidas viram componente React, não `@apply`
- Variações de componente ficam num objeto de classes por variante

## Pronto quando

Um token definido no `@theme` funciona como classe num componente, e o build passa.

## Commits sugeridos

- `chore: adiciona Tailwind CSS`
- `style: cria tema base do Tailwind`
