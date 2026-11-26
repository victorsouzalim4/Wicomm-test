# Wicomm Test

Reprodução de um layout de e-commerce do Figma, feita para o teste prático de Dev Júnior da Wicomm.

- **Página publicada:** https://wicomm-test-weld.vercel.app
- **Repositório:** https://github.com/victorsouzalim4/Wicomm-test

O deploy é feito pela Vercel, ligada ao GitHub: cada push na `main` publica uma nova versão.

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20.19 ou mais recente (desenvolvido com o Node 24)
- npm (vem com o Node)

### Passo a passo

```bash
# 1. Clonar o repositório
git clone https://github.com/victorsouzalim4/Wicomm-test.git
cd Wicomm-test

# 2. Instalar as dependências
npm install

# 3. Rodar em modo de desenvolvimento (http://localhost:5173)
npm run dev
```

Não é preciso configurar nada: os dados vêm da API mock em `public/api/`. Para apontar para outra API, copie o `.env.example` para `.env` e altere o `VITE_API_URL`.

### Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento com recarregamento automático |
| `npm run build` | Verifica os tipos (TypeScript) e gera a versão de produção em `dist/` |
| `npm run preview` | Serve localmente a versão de produção gerada pelo `build` |
| `npm run lint` | Procura problemas no código, inclusive de acessibilidade (oxlint) |
| `npm test` | Roda os testes em modo observação (Vitest) |
| `npm run test:run` | Roda os testes uma vez (para CI) |
| `npm run format` | Formata o código com o Prettier (e ordena as classes do Tailwind) |
| `npm run format:check` | Confere a formatação sem alterar nada |

## Tecnologias

| Ferramenta | Uso |
| --- | --- |
| [React 19](https://react.dev/) | Interface em componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem do código |
| [Vite](https://vite.dev/) | Servidor de desenvolvimento e build |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilo |
| Vuesax/Iconsax (SVGs exportados do Figma) | Ícones |

## Decisões

Cada decisão está registrada em um ADR (*Architecture Decision Record*) em [`doc/adr/`](doc/adr/README.md), com o contexto, as alternativas e as consequências.

| Decisão | ADR |
| --- | --- |
| React para a interface e Tailwind para o estilo | [ADR-0002](doc/adr/0002-react-e-tailwind.md) |
| TypeScript, Vite, Vitest e Vercel | [ADR-0003](doc/adr/0003-typescript-vite-vitest-vercel.md) |
| Ícones Vuesax exportados do Figma em SVG (substitui o Lucide) | [ADR-0012](doc/adr/0012-icones-vuesax-exportados-do-figma.md) |
| Carrossel genérico feito à mão | [ADR-0005](doc/adr/0005-carrossel-generico-proprio.md) |
| Estado do carrinho com Context, `useReducer` e `localStorage` | [ADR-0006](doc/adr/0006-estado-do-carrinho.md) |
| Prettier para formatação (o linter do ADR-0007 foi substituído) | [ADR-0007](doc/adr/0007-eslint-e-prettier.md) |
| Linter: oxlint, com regras de acessibilidade (`jsx-a11y`) | [ADR-0011](doc/adr/0011-linter-oxlint.md) |
| Imagens hospedadas no Cloudinary e referenciadas por URL | [ADR-0008](doc/adr/0008-imagens-hospedadas-externamente.md) |
| Organização em `layout`, `sections` e `components` | [ADR-0009](doc/adr/0009-organizacao-layout-sections-components.md) |
| API mock com JSON (`public/api/`), com as URLs das imagens do Cloudinary | [ADR-0010](doc/adr/0010-api-mock-com-json-estatico.md) |

O planejamento do trabalho, etapa por etapa, está em [`doc/roadmap/`](doc/roadmap/roadmap.md).

## O que faria com mais tempo

Esta página é a vitrine de uma loja. Para virar uma loja de verdade, eu seguiria por camadas.

### Front-end

- **Busca funcionando**, com paginação dos resultados
- **Página de produto** e **fluxo de checkout**: carrinho, entrega, pagamento e confirmação
- **Testes de ponta a ponta com Playwright** cobrindo o fluxo de compra: busca, produto, carrinho e checkout

### Back-end

- **Uma API real no lugar dos JSONs.** A camada `services/` já isola o acesso aos dados, então a troca seria basicamente mudar o `VITE_API_URL`.
- **API Gateway** como porta de entrada única, com autenticação, rate limit e roteamento para os serviços
- **Camada de serviços** separada por domínio: catálogo, busca, carrinho, pedidos e pagamentos
- **Banco de dados PostgreSQL** para produtos, estoque, clientes e pedidos
- **Integração com um gateway de pagamento** (Pix, cartão e boleto), confirmando o pedido por webhook
- **Controle de concorrência do estoque**, para dois clientes não comprarem a última unidade ao mesmo tempo. Seria feito com reserva do item no checkout e trava no banco (`SELECT ... FOR UPDATE` ou controle otimista por versão).

### Infraestrutura

- **Containers (Docker) e Kubernetes** para escalar os serviços conforme o tráfego (autoscaling), com **load balancer** distribuindo as requisições
- **CI/CD**: lint, testes e build a cada pull request, e deploy automático por ambiente (homologação e produção)
- **Observabilidade**: logs centralizados, métricas e alertas
