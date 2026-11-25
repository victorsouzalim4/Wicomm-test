# ADR-0004 — Ícones com Lucide

- **Status:** Substituído pelo [ADR-0012](0012-icones-vuesax-exportados-do-figma.md): os ícones do Figma são Vuesax, não Lucide
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 1 — Definir a stack](../roadmap/etapa-01-stack/README.md)

## Contexto

O layout usa ícones (carrinho, busca, menu, setas, fechar etc.). Desenhar ou exportar cada um à mão toma tempo, e o critério "Fidelidade ao layout" (peso 30) pede que eles fiquem o mais próximo possível do Figma.

## Opções consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| Exportar todos os SVGs do Figma | Fidelidade total | Trabalho manual, e cada ícone vira um arquivo ou componente para manter |
| **Lucide (`lucide-react`)** | Cada ícone é um componente React. Só os ícones importados vão para o bundle. Tamanho e cor por props ou classes do Tailwind. | Pode não ser idêntico ao ícone do Figma. Não tem mais ícones de marcas (redes sociais). |

## Decisão

Usar **Lucide** (`lucide-react`) para os ícones genéricos de interface. Usar **SVG exportado do Figma** quando:

- o ícone do Figma for visivelmente diferente do equivalente no Lucide;
- for uma marca (logo da loja, redes sociais, bandeiras de cartão).

## Consequências

- Na etapa 2, ao mapear o Figma, conferir ícone por ícone se o Lucide tem um equivalente fiel. Os que não tiverem são exportados em SVG.
- Ícones só decorativos levam `aria-hidden="true"`. Botões só com ícone (carrinho, menu, fechar) precisam de um texto acessível (`aria-label` ou texto visualmente oculto).
- O tamanho e a espessura do traço (`strokeWidth`) seguem o Figma, e não o padrão do Lucide.
