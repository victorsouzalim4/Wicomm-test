import { Children, isValidElement, type ReactNode } from 'react'
import { Icon } from '@/components/Icon/Icon'
import { useCarousel } from '@/hooks/useCarousel'
import { cn } from '@/utils/cn'

interface CarouselProps {
  /** Nome acessível do carrossel, por exemplo "Os Preferidos da Amakha Paris". */
  label: string
  /** Cada filho vira um slide. */
  children: ReactNode
  /** Largura de cada slide por breakpoint, com classes completas do Tailwind (ex.: "basis-4/5 md:basis-1/3"). */
  slideClassName?: string
  /** Espaço entre os slides. */
  gapClassName?: string
  showArrows?: boolean
  showDots?: boolean
  className?: string
}

const arrowClasses =
  'absolute top-1/2 z-10 hidden size-8.75 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black disabled:pointer-events-none disabled:opacity-0 md:flex'

/**
 * Carrossel genérico (ADR-0005): trilho com scroll-snap (arraste com o dedo nativo),
 * setas e bolinhas como botões acessíveis. Os controles somem quando tudo cabe na tela.
 */
export function Carousel({
  label,
  children,
  slideClassName,
  gapClassName = 'gap-2.25',
  showArrows = true,
  showDots = true,
  className,
}: CarouselProps) {
  const { trackRef, page, pageCount, canGoPrevious, canGoNext, goTo, previous, next } =
    useCarousel<HTMLUListElement>()
  const slides = Children.toArray(children)
  const hasMultiplePages = pageCount > 1

  return (
    <section
      aria-roledescription="carrossel"
      aria-label={label}
      className={cn('relative', className)}
    >
      <div className="relative">
        <ul
          ref={trackRef}
          className={cn(
            'scrollbar-hidden flex snap-x snap-mandatory overflow-x-auto py-1 motion-safe:scroll-smooth',
            gapClassName,
          )}
        >
          {slides.map((slide, index) => (
            <li
              key={isValidElement(slide) ? slide.key : index}
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${slides.length}`}
              className={cn('shrink-0 snap-start', slideClassName)}
            >
              {slide}
            </li>
          ))}
        </ul>

        {showArrows && hasMultiplePages && (
          <>
            <button
              type="button"
              aria-label="Anterior"
              onClick={previous}
              disabled={!canGoPrevious}
              className={cn(arrowClasses, 'left-0 -translate-x-1/2')}
            >
              <Icon name="arrow-right" className="h-3.5 w-2.5 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={next}
              disabled={!canGoNext}
              className={cn(arrowClasses, 'right-0 translate-x-1/2')}
            >
              <Icon name="arrow-right" className="h-3.5 w-2.5" />
            </button>
          </>
        )}
      </div>

      {showDots && hasMultiplePages && (
        <div className="mt-4 flex justify-center gap-3">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir para a página ${index + 1} de ${pageCount}`}
              aria-current={index === page ? 'true' : undefined}
              onClick={() => goTo(index)}
              className={cn(
                'size-2.5 cursor-pointer rounded-full transition-colors',
                index === page ? 'bg-black' : 'bg-dot hover:bg-black/40',
              )}
            />
          ))}
        </div>
      )}
    </section>
  )
}
