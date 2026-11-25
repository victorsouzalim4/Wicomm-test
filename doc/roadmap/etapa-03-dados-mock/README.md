# Etapa 3 — Dados: mock via API ou mock direto?

## Objetivo

Decidir de onde vêm os dados da página (produtos, banners, links do menu) e montar essa camada.

## As opções

| Opção | Como funciona | Prós | Contras |
| --- | --- | --- | --- |
| **A. Mock direto** | Arquivo `src/data/products.ts` importado direto no componente | Simples, tipado, nenhum estado de carregamento | Componente fica preso ao arquivo. Trocar por uma API real obriga a mexer nos componentes. |
| **B. Mock direto atrás de um service** | O arquivo de dados só é acessado por `src/services/productService.ts`, que devolve uma `Promise` | Componentes não sabem de onde vêm os dados. Trocar por API real é mexer em um arquivo só. Permite mostrar loading. | Um pouco mais de código que a opção A |
| **C. JSON estático via `fetch`** | `public/api/products.json`, buscado com `fetch` | Requisição HTTP de verdade e aparece na aba Network | Perde a tipagem automática (precisa validar ou fazer cast) |
| **D. MSW (Mock Service Worker)** | Intercepta requisições `fetch` e responde com dados falsos | O mais próximo de uma API real, muito usado em testes | Dependência a mais e configuração extra para pouco ganho neste teste |
| **E. json-server** | Servidor local que serve um `db.json` | API REST completa | Não roda na Vercel como site estático. A página publicada quebraria. |

## Recomendação: opção B

- Mantém a simplicidade e a tipagem do mock direto.
- Mostra separação de responsabilidades, que conta em "Qualidade do código" e rende uma boa conversa na entrevista.
- Funciona igual no deploy da Vercel.
- Se der tempo, a opção C pode substituir a B por dentro do service, sem mexer em nenhum componente.

A decisão final vai para o README, na seção de decisões.

## Partes

| # | Parte | Status |
| --- | --- | --- |
| 1 | [Fechar a decisão](01-decisao.md) | [ ] |
| 2 | [Criar os dados mockados](02-dados-mockados.md) | [ ] |
| 3 | [Criar a camada de service](03-camada-de-service.md) | [ ] |
| 4 | [Consumir os dados nos componentes](04-consumo-nos-componentes.md) | [ ] |
