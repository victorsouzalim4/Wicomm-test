# Etapa 3 — Dados: API mockada ou mocks diretos?

## Objetivo

Decidir de onde vêm os dados dos produtos e dos banners, e montar essa camada.

## Opções

| Opção | Como funciona | Prós | Contras |
| --- | --- | --- | --- |
| **A. Mocks diretos** | `import { products } from '@/data/products'` direto no componente | Mais simples, zero código extra | O componente fica acoplado ao arquivo. Trocar por uma API real depois mexe em vários lugares. Não mostra estados de carregamento e erro. |
| **B. Camada de serviço com dados locais** | `getProducts()` em `src/services/` devolve uma `Promise` com os dados do arquivo local (com um pequeno atraso simulado). Um hook `useProducts()` consome o serviço. | Simula uma API de verdade (async, loading, erro) sem servidor. Trocar por API real muda só o serviço. Funciona no deploy estático da Vercel. | Um pouco mais de código |
| **C. MSW (Mock Service Worker)** | Intercepta um `fetch('/api/products')` de verdade | É o mais realista, com `fetch` real | Dependência extra e configuração de service worker para pouco ganho neste teste |
| **D. json-server** | Servidor local servindo um JSON | API REST real | Precisa de um servidor rodando, o que **quebra o deploy estático** na Vercel |

## Recomendação: opção B

Ela mostra para o avaliador que sabemos lidar com dados assíncronos (loading, erro, tipagem) e separar responsabilidades, sem dependências extras e sem complicar o deploy. A decisão e o motivo vão para o README.

> **A decidir:** confirmar a opção B antes de começar.

## Partes

| # | Parte | Status |
| --- | --- | --- |
| 1 | [Modelar os tipos](01-modelar-tipos.md) | [ ] |
| 2 | [Criar os dados mockados](02-dados-mockados.md) | [ ] |
| 3 | [Criar a camada de serviço](03-camada-de-servico.md) | [ ] |
| 4 | [Criar os hooks e os estados de tela](04-hooks-e-estados.md) | [ ] |
