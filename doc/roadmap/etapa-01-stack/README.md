# Etapa 1 — Definir a stack

## Decisões

| Camada | Escolha | Por quê |
| --- | --- | --- |
| Estrutura | HTML semântico (via JSX) | Exigido pelo teste. Também conta no critério de acessibilidade. |
| Comportamento | React + TypeScript | O mini cart, os carrosséis e os menus têm estado. Componentes evitam código repetido. TypeScript conta como diferencial. |
| Estilo | Sass com CSS Modules (`*.module.scss`) | Variáveis e mixins guardam os tokens do Figma (cores, fontes, espaçamentos, breakpoints). Os CSS Modules impedem conflito de nomes entre componentes. |
| Build | Vite | Ambiente de desenvolvimento rápido, build otimizado e suporte nativo a TS e Sass. |
| Estado do carrinho | Context API + `useReducer` | Basta para um carrinho e não adiciona dependências. Os dados ficam salvos no `localStorage`. |
| Carrossel | Componente próprio | Fica fora dos frameworks vetados, deixa o bundle menor e dá controle total sobre a acessibilidade (teclado, `aria-*`). |
| Qualidade | ESLint + Prettier | Código padronizado e menos coisa sobrando. |
| Testes | Vitest + Testing Library | Diferencial do teste. A prioridade é a lógica do carrinho. |
| Deploy | Vercel | Plano gratuito e deploy automático a cada push na `main`. |

### Fora de escopo (vetado pelo teste)

Vue, Angular, Svelte, Bootstrap e qualquer outro framework de UI ou CSS. Tailwind também fica de fora, porque o teste pede só uma ferramenta de estilo.

## Partes

| # | Parte | Status |
| --- | --- | --- |
| 1 | [Criar o projeto com Vite](01-criar-projeto-vite.md) | [ ] |
| 2 | [Configurar o Sass](02-configurar-sass.md) | [ ] |
| 3 | [Configurar ESLint e Prettier](03-eslint-prettier.md) | [ ] |
| 4 | [Configurar Vitest e Testing Library](04-vitest-testing-library.md) | [ ] |
| 5 | [Definir a estrutura de pastas](05-estrutura-de-pastas.md) | [ ] |
| 6 | [Criar o README inicial](06-readme-inicial.md) | [ ] |
| 7 | [Fazer o primeiro deploy na Vercel](07-deploy-vercel.md) | [ ] |
