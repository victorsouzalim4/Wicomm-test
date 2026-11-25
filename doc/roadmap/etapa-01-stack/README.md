# Etapa 1 — Definir a stack

## Decidido

| Camada | Escolha | Registro |
| --- | --- | --- |
| Estrutura | HTML semântico (via JSX) | Exigido pelo teste |
| Comportamento | React | [ADR-0002](../../adr/0002-react-e-tailwind.md) |
| Estilo | Tailwind CSS | [ADR-0002](../../adr/0002-react-e-tailwind.md) |
| Linguagem | TypeScript | [ADR-0003](../../adr/0003-typescript-vite-vitest-vercel.md) |
| Build | Vite | [ADR-0003](../../adr/0003-typescript-vite-vitest-vercel.md) |
| Testes | Vitest + Testing Library | [ADR-0003](../../adr/0003-typescript-vite-vitest-vercel.md) |
| Deploy | Vercel | [ADR-0003](../../adr/0003-typescript-vite-vitest-vercel.md) |
| Ícones | Vuesax, exportados do Figma em SVG (`src/assets/icons/`) | [ADR-0012](../../adr/0012-icones-vuesax-exportados-do-figma.md) |
| Carrossel | Componente `Carousel` genérico feito por nós, com scroll-snap | [ADR-0005](../../adr/0005-carrossel-generico-proprio.md) |
| Estado do carrinho | Context + `useReducer`, salvo no `localStorage` | [ADR-0006](../../adr/0006-estado-do-carrinho.md) |
| Qualidade | oxlint (com `jsx-a11y`) + Prettier (com `prettier-plugin-tailwindcss`) | [ADR-0011](../../adr/0011-linter-oxlint.md), [ADR-0007](../../adr/0007-eslint-e-prettier.md) |

Todas as decisões de stack estão fechadas. Falta executar as partes abaixo.

### Fora de escopo (vetado pelo teste)

Vue, Angular, Svelte, Bootstrap e qualquer outro framework de UI ou CSS. Sass e CSS puro também ficam de fora, porque o teste pede só uma ferramenta de estilo.

## Partes

| # | Parte | Status |
| --- | --- | --- |
| 1 | [Criar o projeto com Vite](01-criar-projeto-vite.md) | [x] |
| 2 | [Configurar o Tailwind](02-configurar-tailwind.md) | [x] instalado (o `@theme` e os estilos base esperam os tokens da etapa 2) |
| 3 | [Configurar linter e Prettier](03-eslint-prettier.md) | [x] oxlint + Prettier |
| 4 | [Configurar Vitest e Testing Library](04-vitest-testing-library.md) | [x] |
| 5 | [Definir a estrutura de pastas](05-estrutura-de-pastas.md) | [x] |
| 6 | [Criar o README inicial](06-readme-inicial.md) | [x] (atualizado a cada parte) |
| 7 | Primeiro deploy na Vercel: movido para a [etapa 5](../etapa-05-deploy/01-deploy-vercel.md), mas deve ser feito logo depois desta etapa | — |
