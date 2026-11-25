# Wicomm Test

Reprodução de um layout de e-commerce do Figma, feita para o teste prático de Dev Júnior da Wicomm.

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
| [Lucide](https://lucide.dev/) | Ícones |

## Decisões

Cada decisão está registrada em um ADR (*Architecture Decision Record*) em [`doc/adr/`](doc/adr/README.md), com o contexto, as alternativas e as consequências.

| Decisão | ADR |
| --- | --- |
| React para a interface e Tailwind para o estilo | [ADR-0002](doc/adr/0002-react-e-tailwind.md) |
| TypeScript, Vite, Vitest e Vercel | [ADR-0003](doc/adr/0003-typescript-vite-vitest-vercel.md) |
| Ícones com Lucide | [ADR-0004](doc/adr/0004-icones-lucide.md) |
| Carrossel genérico feito à mão | [ADR-0005](doc/adr/0005-carrossel-generico-proprio.md) |
| Estado do carrinho com Context, `useReducer` e `localStorage` | [ADR-0006](doc/adr/0006-estado-do-carrinho.md) |
| Prettier para formatação (o linter do ADR-0007 foi substituído) | [ADR-0007](doc/adr/0007-eslint-e-prettier.md) |
| Linter: oxlint, com regras de acessibilidade (`jsx-a11y`) | [ADR-0011](doc/adr/0011-linter-oxlint.md) |
| Imagens hospedadas no Cloudinary e referenciadas por URL | [ADR-0008](doc/adr/0008-imagens-hospedadas-externamente.md) |
| Organização em `layout`, `sections` e `components` | [ADR-0009](doc/adr/0009-organizacao-layout-sections-components.md) |
| API mock com JSON (`public/api/`), com as URLs das imagens do Cloudinary | [ADR-0010](doc/adr/0010-api-mock-com-json-estatico.md) |

O planejamento do trabalho, etapa por etapa, está em [`doc/roadmap/`](doc/roadmap/roadmap.md).

### Interpretações do layout

Pontos em que o Figma não é claro ou tem inconsistências, e o que foi decidido:

| No Figma | Decisão | Por quê |
| --- | --- | --- |
| O card mostra "R$ 255" e "12x R$ 18,75 sem juros", mas 12 × 18,75 = R$ 225 | As parcelas são **calculadas a partir do preço**: 12x de R$ 21,25. O JSON guarda só o preço e o número de parcelas. | Um valor calculado nunca fica inconsistente com o preço, mesmo quando o preço muda |
| Só o primeiro card de cada vitrine mostra o botão "COMPRAR" | É o **estado de hover** do card. No celular, onde não existe hover, o botão fica sempre visível. | É o padrão de vitrines de e-commerce, e o Figma mostra um card "ativo" ao lado de outros "em repouso" |
| As tags "Cupom com 15% off" e "Dia do Consumidor" aparecem só no primeiro card | As tags são **dados do produto** (`tags` no JSON): só o Athena tem, e elas aparecem sempre | Tag de cupom é informação do produto, não um efeito visual |
| O selo diz "10%", mas R$ 320 → R$ 255 é 20% de desconto | O percentual do selo é **calculado a partir dos preços** ("-20%") | Mesmo princípio das parcelas: valores derivados não podem contradizer os preços |
| Os 5 cards têm o mesmo nome ("Perfume Feminino Athena...") com fotos de perfumes diferentes | Cada produto recebeu o nome da foto (Athena, Fortune, RB, DB Romântica, Chic Woman) | Nome e foto que não batem confundiriam o carrinho |
| A barra de avisos diz frete grátis acima de R$ 199,90, a barra de vantagens diz R$ 149,90. O card parcela em 12x, as vantagens dizem "até 6x" | Os textos foram mantidos como no Figma (estão no `campaign.json`, fáceis de corrigir) | São textos de campanha, não regras de cálculo. Fica registrado como inconsistência do layout. |
| Os dropdowns do menu não aparecem no Figma (só o da Revenda, oculto) | Subcategorias de exemplo no `navigation.json`. A Revenda usa os links da coluna "Representante" do footer. | O layout indica que o menu tem dropdowns, mas não mostra o conteúdo |

## Histórico de configuração

Todos os comandos usados para montar o projeto, na ordem em que foram rodados. Não é preciso repetir nada disto para rodar o projeto: basta o `npm install` do passo a passo acima.

### 1. Projeto base com Vite, React e TypeScript

```bash
npm create vite@latest wicomm-test -- --template react-ts --no-interactive
```

O repositório já tinha a pasta `doc/`, então o projeto foi gerado numa pasta separada e os arquivos foram copiados para a raiz. Depois foram removidos o conteúdo de exemplo do template (contador, imagens, `App.css`, `public/`) e o `index.html` foi ajustado (`lang="pt-BR"`, título e descrição).

```bash
npm install
```

### 2. Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

- `vite.config.ts`: plugin `tailwindcss()` adicionado à lista de `plugins`
- `src/index.css`: conteúdo trocado por `@import 'tailwindcss';`

### 3. Ícones

```bash
npm install lucide-react
```

### 4. Prettier

```bash
npm install -D prettier prettier-plugin-tailwindcss
npm pkg set scripts.format="prettier --write ." scripts.format:check="prettier --check ."
```

- `.prettierrc`: sem ponto e vírgula, aspas simples (o mesmo estilo do template do Vite), e o plugin que ordena as classes do Tailwind
- `.prettierignore`: ignora build, dependências, `figma-export/` e Markdown (a documentação é escrita à mão)

### 5. Testes (Vitest + Testing Library)

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm pkg set scripts.test="vitest" scripts.test:run="vitest run"
```

- `vite.config.ts`: bloco `test` com `environment: 'jsdom'` e `setupFiles: './src/setupTests.ts'`
- `src/setupTests.ts`: ativa os matchers do jest-dom (`toBeInTheDocument`...) e limpa o DOM depois de cada teste
- `src/App.test.tsx`: primeiro teste, só para validar a configuração

### 6. Estrutura de pastas e alias `@/`

```bash
mkdir -p src/assets/icons src/assets/brand src/layout src/sections src/components \
         src/context src/hooks src/services src/types src/utils public/api
```

- Organização definida no [ADR-0009](doc/adr/0009-organizacao-layout-sections-components.md). As pastas vazias têm um `.gitkeep` até receber arquivos.
- Alias `@/` → `src/`, configurado em `vite.config.ts` (`resolve.alias`) e em `tsconfig.app.json` (`paths`). Exemplo: `import App from '@/App'`.

### 7. Linter (oxlint)

O oxlint já vem no template do Vite (`npm run lint`). O `.oxlintrc.json` foi ajustado para ativar os plugins `jsx-a11y` (acessibilidade) e `vitest`, com a categoria `correctness` como erro. Por que oxlint e não ESLint: [ADR-0011](doc/adr/0011-linter-oxlint.md).

### 8. Fontes e design tokens

```bash
npm install @fontsource/poppins @fontsource/inter
```

- `src/main.tsx`: importa só os pesos usados no Figma, no subconjunto latino (Poppins 300, 500, 600 e 700; Inter 500). As fontes são servidas pelo próprio site em WOFF2, sem depender do Google Fonts.
- `src/index.css`: bloco `@theme` com os tokens do Figma (fontes, cores, sombras e largura do conteúdo) e estilos base (fonte padrão e foco visível amarelo para navegação por teclado).

## O que faria com mais tempo

*A preencher ao final do projeto.*
