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
| Ícones | Lucide (`lucide-react`), com SVG do Figma para marcas e ícones sem equivalente fiel | [ADR-0004](../../adr/0004-icones-lucide.md) |

## Em discussão

| Camada | Proposta | Por quê |
| --- | --- | --- |
| Estado do carrinho | Context API + `useReducer` | Basta para um carrinho e não adiciona dependências. Os dados ficam salvos no `localStorage`. |
| Carrossel | Componente próprio com o scroll-snap do Tailwind (`snap-x`, `snap-mandatory`, `snap-start`) e pouco JS para setas e bolinhas | O Tailwind não tem carrossel pronto. O scroll-snap dá o arraste com o dedo de graça, e o resto fica sob nosso controle (acessibilidade, itens por tela). |
| Qualidade | ESLint + Prettier (com `prettier-plugin-tailwindcss`) | Código padronizado e classes do Tailwind sempre na mesma ordem |

Cada item aceito vira um ADR em [`doc/adr/`](../../adr/README.md) e sobe para a tabela "Decidido".

### Fora de escopo (vetado pelo teste)

Vue, Angular, Svelte, Bootstrap e qualquer outro framework de UI ou CSS. Sass e CSS puro também ficam de fora, porque o teste pede só uma ferramenta de estilo.

## Partes

| # | Parte | Status |
| --- | --- | --- |
| 1 | [Criar o projeto com Vite](01-criar-projeto-vite.md) | [ ] |
| 2 | [Configurar o Tailwind](02-configurar-tailwind.md) | [ ] |
| 3 | [Configurar ESLint e Prettier](03-eslint-prettier.md) | [ ] |
| 4 | [Configurar Vitest e Testing Library](04-vitest-testing-library.md) | [ ] |
| 5 | [Definir a estrutura de pastas](05-estrutura-de-pastas.md) | [ ] |
| 6 | [Criar o README inicial](06-readme-inicial.md) | [ ] |
| 7 | [Fazer o primeiro deploy na Vercel](07-deploy-vercel.md) | [ ] |
