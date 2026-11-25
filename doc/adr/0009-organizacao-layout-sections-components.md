# ADR-0009 — Organização em `layout`, `sections` e `components`

- **Status:** Aceito
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 2 — Definir a componentização](../roadmap/etapa-02-componentizacao/README.md)

## Contexto

O Figma tem uma única página longa, com 15 blocos (ver [2.2](../roadmap/etapa-02-componentizacao/02-mapear-secoes.md)). Alguns blocos se repetem com outros dados (três vitrines de produtos) e várias peças aparecem em mais de um bloco (card de produto, carrossel, título de seção, botão). Precisamos de uma organização que deixe claro o que é estrutura da página, o que é conteúdo e o que é reaproveitável.

## Decisão

A árvore segue o formato `App → Header → conteúdo (main) → Footer`, com as peças reaproveitáveis separadas:

```
src/
├── layout/        # o que envolve toda página: AnnouncementBar, Header, Footer, WhatsAppButton
├── sections/      # blocos do <main>, na ordem do Figma: HeroBanner, ProductShelf, BlogSection...
├── components/    # peças reaproveitáveis, sem conhecer a página: Button, Carousel, ProductCard...
├── context/       # CartContext
├── data/          # mocks (produtos, banners, blog...)
├── hooks/         # useCarousel, useCountdown, useCart...
├── types/
└── utils/
```

Regras:

- **`components/`** não importa nada de `sections/` nem de `layout/`, e recebe tudo por props.
- **`sections/`** monta componentes com os dados da seção. Ela é a única camada que fala com os dados (hooks/services).
- **`layout/`** é usado uma vez, no `App`.
- Se um bloco do Figma se repete com outros dados, é **uma** seção com props (por exemplo `ProductShelf`), não uma cópia.

## Consequências

- O `App.tsx` fica legível como um índice da página: `Header`, a lista de seções na ordem do Figma, `Footer`.
- Reordenar, remover ou repetir uma seção vira uma mudança de uma linha no `App`.
- A pasta `components/` vira uma pequena biblioteca de UI, fácil de testar isoladamente.
- Substitui a pasta única `components/` + `sections/` sugerida na [parte 1.5](../roadmap/etapa-01-stack/05-estrutura-de-pastas.md), acrescentando `layout/`.
