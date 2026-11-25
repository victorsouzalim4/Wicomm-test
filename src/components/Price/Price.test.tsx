import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Price } from './Price'

describe('Price', () => {
  it('mostra o preço "de" riscado, o preço atual e a parcela calculada', () => {
    const { container } = render(<Price price={25500} listPrice={32000} installments={12} />)

    expect(container.querySelector('s')).toHaveTextContent('R$ 320')
    expect(screen.getByText('R$ 255', { selector: 'strong' })).toBeInTheDocument()
    expect(screen.getByText(/12x R\$\s21,25 sem juros/)).toBeInTheDocument()
  })

  it('anuncia "de" e "por" para leitores de tela', () => {
    render(<Price price={25500} listPrice={32000} />)

    expect(screen.getByText('De')).toHaveClass('sr-only')
    expect(screen.getByText('por')).toHaveClass('sr-only')
  })

  it('não mostra o preço "de" nem o parcelamento quando não há', () => {
    const { container } = render(<Price price={25500} />)

    expect(container.querySelector('s')).toBeNull()
    expect(screen.queryByText(/sem juros/)).toBeNull()
  })
})
