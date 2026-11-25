# ADR-0001 — Registrar decisões de arquitetura com ADRs

- **Status:** Aceito
- **Data:** 25/11/2026
- **Etapa do roadmap:** todas

## Contexto

O teste pede que o README explique as decisões tomadas, principalmente onde o Figma não deixa claro o que fazer (hover, comportamento no celular etc.). Na próxima fase do processo vamos conversar sobre o código, então também precisamos lembrar o porquê de cada escolha.

## Decisão

Registrar cada decisão importante em um ADR dentro de `doc/adr/`, seguindo o [template](template.md).

## Consequências

- A seção "Decisões tomadas" do README vira um resumo dos ADRs, com link para cada um.
- Cada decisão fica num commit próprio (`docs: adiciona ADR-XXXX ...`), o que ajuda no critério "Git e README".
- Custo: alguns minutos por decisão. Só vira ADR o que tem alternativas reais. Detalhes pequenos ficam nos comentários do código ou nos commits.
