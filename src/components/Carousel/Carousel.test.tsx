import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Carousel } from './Carousel'

/** O jsdom não calcula layout: simulamos um trilho de 300px com 3 páginas de conteúdo. */
function mockTrackLayout({ clientWidth = 300, scrollWidth = 900, scrollLeft = 0 } = {}) {
  const scrollTo = vi.fn<(options: ScrollToOptions) => void>()
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(clientWidth)
  vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(scrollWidth)
  vi.spyOn(HTMLElement.prototype, 'scrollLeft', 'get').mockReturnValue(scrollLeft)
  // scrollTo tem duas assinaturas (opções ou x/y); o carrossel só usa a de opções.
  HTMLElement.prototype.scrollTo = scrollTo as unknown as HTMLElement['scrollTo']
  return scrollTo
}

const renderCarousel = () =>
  render(
    <Carousel label="Mais vendidos">
      <p key="a">Produto A</p>
      <p key="b">Produto B</p>
      <p key="c">Produto C</p>
    </Carousel>,
  )

describe('Carousel', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('identifica o carrossel e cada slide para leitores de tela', () => {
    renderCarousel()

    expect(screen.getByRole('region', { name: 'Mais vendidos' })).toHaveAttribute(
      'aria-roledescription',
      'carrossel',
    )
    expect(
      screen.getAllByRole('listitem').map((slide) => slide.getAttribute('aria-label')),
    ).toEqual(['1 de 3', '2 de 3', '3 de 3'])
  })

  it('esconde setas e bolinhas quando tudo cabe na tela', () => {
    mockTrackLayout({ clientWidth: 900, scrollWidth: 900 })
    renderCarousel()

    expect(screen.queryByRole('button', { name: 'Próximo' })).toBeNull()
    expect(screen.queryByRole('button', { name: /Ir para a página/ })).toBeNull()
  })

  it('mostra uma bolinha por página e desativa "Anterior" no início', () => {
    mockTrackLayout()
    renderCarousel()

    expect(screen.getAllByRole('button', { name: /Ir para a página/ })).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Ir para a página 1 de 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Anterior' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Próximo' })).toBeEnabled()
  })

  it('rola uma página inteira ao clicar em "Próximo" e vai direto à página da bolinha', async () => {
    const scrollTo = mockTrackLayout()
    renderCarousel()

    await userEvent.click(screen.getByRole('button', { name: 'Próximo' }))
    expect(scrollTo).toHaveBeenLastCalledWith(expect.objectContaining({ left: 300 }))

    await userEvent.click(screen.getByRole('button', { name: 'Ir para a página 3 de 3' }))
    expect(scrollTo).toHaveBeenLastCalledWith(expect.objectContaining({ left: 600 }))
  })

  it('desativa "Próximo" na última página', () => {
    mockTrackLayout({ scrollLeft: 600 })
    renderCarousel()

    expect(screen.getByRole('button', { name: 'Próximo' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Ir para a página 3 de 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
