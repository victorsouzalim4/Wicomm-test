# ADR-0011 — Linter: oxlint no lugar do ESLint

- **Status:** Proposto (substituiria o [ADR-0007](0007-eslint-e-prettier.md) na parte do linter. O Prettier continua.)
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 1 — Definir a stack](../roadmap/etapa-01-stack/README.md)

## Contexto

O ADR-0007 escolheu ESLint + Prettier, principalmente pelo plugin `jsx-a11y` (acessibilidade). Ao configurar o projeto, apareceram dois fatos novos:

1. **O template atual do Vite** (`create-vite` 9) já vem com o **oxlint** no lugar do ESLint.
2. **O template usa TypeScript 7**, a versão reescrita em Go, que não expõe a API em JavaScript. O `typescript-eslint`, que o ESLint precisa para ler TypeScript, só aceita TypeScript abaixo da 6.1.

Ou seja: para usar ESLint, precisaríamos voltar o TypeScript para a versão 5.x/6.0.

## Opções consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| ESLint + voltar o TypeScript para 6.0 | Ferramenta mais conhecida, maior ecossistema de plugins | Abre mão do TypeScript 7 (checagem de tipos bem mais rápida) e briga com o template oficial |
| **oxlint (já instalado) + Prettier** | Já vem no template. Muito mais rápido. Tem as regras de React, React Hooks, TypeScript e **36 regras de `jsx-a11y`** embutidas, sem plugins para instalar. | Menos regras que o ecossistema completo do ESLint. Plugins de terceiros são mais limitados. |

## Decisão (proposta)

Manter o **oxlint** como linter, ativando os plugins `react`, `typescript`, `oxc` e **`jsx-a11y`**, e o **Prettier** para a formatação.

## Consequências

- O `.oxlintrc.json` ganha o plugin `jsx-a11y`, cobrindo o motivo original do ADR-0007 (imagem sem `alt`, botão sem texto, `aria-*` inválido...).
- Continuamos com o TypeScript 7 do template.
- O ADR-0007 passa a "Substituído por ADR-0011" na parte do linter.
