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
| `npm run lint` | Procura problemas no código |

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
| Padronização de código com ESLint e Prettier | [ADR-0007](doc/adr/0007-eslint-e-prettier.md) |
| Imagens hospedadas no Cloudinary e referenciadas por URL | [ADR-0008](doc/adr/0008-imagens-hospedadas-externamente.md) |
| Organização em `layout`, `sections` e `components` | [ADR-0009](doc/adr/0009-organizacao-layout-sections-components.md) |

O planejamento do trabalho, etapa por etapa, está em [`doc/roadmap/`](doc/roadmap/roadmap.md).

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

## O que faria com mais tempo

*A preencher ao final do projeto.*
