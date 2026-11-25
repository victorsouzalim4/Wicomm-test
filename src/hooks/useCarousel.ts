import { useCallback, useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

/**
 * Lógica de navegação do carrossel (ADR-0005). O arraste e o "encaixe" ficam com o
 * scroll-snap do CSS; este hook só calcula as páginas e rola o trilho nas setas e bolinhas.
 * Uma "página" é uma largura visível do trilho.
 */
export function useCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null)
  const [{ page, pageCount }, setPosition] = useState({ page: 0, pageCount: 1 })

  const updatePosition = useCallback(() => {
    const track = trackRef.current
    if (!track || track.clientWidth === 0) return

    const { scrollLeft, scrollWidth, clientWidth } = track
    // 1px de tolerância para arredondamentos de subpixel.
    const nextPageCount = Math.max(1, Math.ceil((scrollWidth - 1) / clientWidth))
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1
    const nextPage = isAtEnd ? nextPageCount - 1 : Math.round(scrollLeft / clientWidth)

    setPosition((current) =>
      current.page === nextPage && current.pageCount === nextPageCount
        ? current
        : { page: nextPage, pageCount: nextPageCount },
    )
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    updatePosition()
    track.addEventListener('scroll', updatePosition, { passive: true })
    const resizeObserver =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updatePosition)
    resizeObserver?.observe(track)

    return () => {
      track.removeEventListener('scroll', updatePosition)
      resizeObserver?.disconnect()
    }
  }, [updatePosition])

  const goTo = useCallback((targetPage: number) => {
    const track = trackRef.current
    if (!track) return

    track.scrollTo({
      left: targetPage * track.clientWidth,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }, [])

  return {
    trackRef,
    page,
    pageCount,
    canGoPrevious: page > 0,
    canGoNext: page < pageCount - 1,
    goTo,
    previous: () => goTo(page - 1),
    next: () => goTo(page + 1),
  }
}
