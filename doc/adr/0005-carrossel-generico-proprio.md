# ADR-0005 — Carrossel genérico feito à mão

- **Status:** Aceito
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 1 — Definir a stack](../roadmap/etapa-01-stack/README.md)

## Contexto

O layout provavelmente tem mais de um carrossel (banner principal, vitrines de produtos, talvez a barra de avisos). O Tailwind não tem carrossel pronto: ele só oferece classes utilitárias. As bibliotecas de componentes feitas sobre o Tailwind (Flowbite, daisyUI) funcionam como o Bootstrap, que o teste veta.

## Opções consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| Biblioteca de carrossel (Swiper, Embla) | Pronta e completa | Dependência a mais e risco de ser vista como "framework". Mostra menos do nosso código. |
| Um carrossel diferente por seção | Cada um faz só o que precisa | Código repetido, o que vai contra o critério "Qualidade do código" |
| **Um componente `Carousel` genérico, feito por nós** | Um só componente reaproveitado em todas as seções. Sem dependências. Controle total da acessibilidade. | Precisamos escrever e testar a lógica de navegação |

## Decisão

Criar um componente **`Carousel` genérico** em `src/components/Carousel/`, que recebe os slides como `children` e o comportamento por props. O arraste usa o **scroll-snap** do CSS (classes `snap-x`, `snap-mandatory` e `snap-start` do Tailwind), e o JavaScript cuida só das setas e das bolinhas.

### Rascunho da API

```tsx
interface CarouselProps {
  label: string;            // nome acessível: "Banners promocionais", "Mais vendidos"
  children: ReactNode;      // cada filho vira um slide
  slideClassName?: string;  // largura do slide por breakpoint, ex.: "basis-4/5 md:basis-1/3 lg:basis-1/4"
  showArrows?: boolean;     // padrão: true
  showDots?: boolean;       // padrão: true
  autoplayMs?: number;      // sem valor = sem autoplay
}

// Uso
<Carousel label="Mais vendidos" slideClassName="basis-4/5 md:basis-1/3 lg:basis-1/4">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</Carousel>
```

A API final é fechada na [etapa 2](../roadmap/etapa-02-componentizacao/README.md), depois de ver todos os carrosséis do Figma.

## Consequências

- **Itens por tela via `slideClassName`:** quem usa o carrossel passa classes completas do Tailwind. Os nomes de classe nunca são montados com strings dinâmicas (`basis-1/${n}`), porque o Tailwind só gera as classes que encontra escritas no código.
- **Lógica separada da apresentação:** a navegação (slide atual, ir para o próximo, ir para um slide) fica num hook `useCarousel`, que pode ser testado sozinho.
- **Acessibilidade:**
  - estrutura em `<section aria-roledescription="carousel" aria-label="...">` com uma lista `<ul>`, e cada slide em `<li aria-roledescription="slide" aria-label="2 de 8">`;
  - setas e bolinhas são `<button>` com texto acessível, e a bolinha ativa tem `aria-current`;
  - se houver autoplay: ele pausa no hover e no foco, tem um botão de pausar e não roda com `prefers-reduced-motion`.
- **Testes:** o hook e o componente ganham testes (avançar, voltar, limites do início e do fim, clique na bolinha).
