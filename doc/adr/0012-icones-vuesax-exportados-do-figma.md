# ADR-0012 — Ícones Vuesax exportados do Figma em SVG

- **Status:** Aceito (substitui o [ADR-0004](0004-icones-lucide.md))
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 2 — Definir a componentização](../roadmap/etapa-02-componentizacao/README.md)

## Contexto

O ADR-0004 escolheu o Lucide para os ícones de interface. Ao inspecionar o Figma, descobrimos que todos os ícones do layout são do pacote **Vuesax/Iconsax** (`vuesax/linear/search-normal`, `profile-circle`, `heart`, `people`, `discount-shape`...). O Lucide tem ícones parecidos, mas com traços e proporções diferentes, e "Fidelidade ao layout" é o critério de maior peso (30).

## Opções consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| Manter o Lucide | Biblioteca completa, componentes prontos | Ícones visivelmente diferentes do Figma |
| Pacote npm do Iconsax | Mesmo desenho do Figma | Pacotes da comunidade pouco mantidos e sem suporte declarado ao React 19 |
| **Exportar do Figma os ícones usados, em SVG** | Idênticos ao layout. Sem dependência. Só os ~12 ícones usados entram no projeto. | Ícones que não estão no Figma (fechar, menu, +, −) precisam ser desenhados no mesmo estilo |

## Decisão

Exportar do Figma, em SVG, cada ícone usado no layout e guardá-los em `src/assets/icons/`, com as cores fixas trocadas por `currentColor`. O `lucide-react` foi removido do projeto.

## Consequências

- **A cor segue o CSS:** com `currentColor`, um ícone fica amarelo com `text-primary`, e o hover muda a cor dele sem precisar de um segundo arquivo.
- **Ícones exportados:** `search-normal`, `profile-circle`, `heart`, `shopping-bag`, `people`, `discount-shape`, `chevron-down`, `arrow-right`, `call`, `sms`, `location` e `location-tick`. Os de marca (redes sociais, WhatsApp, PIX) mantêm as cores originais.
- **Um componente `Icon`** centraliza o uso (`<Icon name="heart" />`), com `aria-hidden` por padrão.
- **Ícones de interações que não estão no Figma** (fechar, menu hambúrguer, mais, menos, lixeira) são desenhados à mão no mesmo padrão: grade de 24px, traço de 1.5px, pontas arredondadas.
- Os SVGs ficam versionados no repositório. Só as imagens PNG de conteúdo ficam fora (vão para o Cloudinary, ADR-0008).
