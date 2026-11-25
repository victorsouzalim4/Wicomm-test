# Registros de Decisão de Arquitetura (ADR)

Um **ADR** (*Architecture Decision Record*) é um documento curto que registra uma decisão importante do projeto: o contexto, o que foi decidido e as consequências. A ideia é que qualquer pessoa, inclusive nós no futuro, entenda **por que** o projeto é do jeito que é.

## Como usar

- Um arquivo por decisão, numerado em sequência: `0001-titulo-curto.md`, `0002-...`
- Copiar o [template](template.md) para começar
- Um ADR aceito **não é editado** para mudar a decisão. Se ela mudar, cria-se um novo ADR que **substitui** o antigo, e o antigo passa para o status "Substituído por ADR-XXXX".
- As decisões que o teste pede no README do projeto saem daqui

## Status possíveis

- **Proposto:** em discussão
- **Aceito:** em vigor
- **Rejeitado:** discutido e descartado (vale registrar, para não discutir de novo)
- **Substituído por ADR-XXXX:** trocado por uma decisão mais nova

## Índice

| # | Decisão | Status | Data |
| --- | --- | --- | --- |
| [0001](0001-registrar-decisoes-com-adr.md) | Registrar decisões de arquitetura com ADRs | Aceito | 25/11/2026 |
| [0002](0002-react-e-tailwind.md) | React para a interface e Tailwind para o estilo | Aceito | 25/11/2026 |
| [0003](0003-typescript-vite-vitest-vercel.md) | TypeScript, Vite, Vitest e Vercel | Aceito | 25/11/2026 |
| [0004](0004-icones-lucide.md) | Ícones com Lucide | Aceito | 25/11/2026 |
| [0005](0005-carrossel-generico-proprio.md) | Carrossel genérico feito à mão | Aceito | 25/11/2026 |
| [0006](0006-estado-do-carrinho.md) | Estado do carrinho com Context, `useReducer` e `localStorage` | Aceito | 25/11/2026 |
| [0007](0007-eslint-e-prettier.md) | Padronização de código com ESLint e Prettier | Aceito | 25/11/2026 |
| [0008](0008-imagens-hospedadas-externamente.md) | Imagens hospedadas fora do projeto e referenciadas por URL | Proposto | 25/11/2026 |
