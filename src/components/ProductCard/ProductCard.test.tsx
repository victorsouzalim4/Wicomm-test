import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { Product } from '@/types/api'
import { ProductCard } from './ProductCard'

const product: Product = {
  id: 'athena',
  name: 'Perfume Feminino Athena 100ml Amakha Paris',
  href: '/produto/perfume-athena-100ml',
  price: 25500,
  listPrice: 32000,
  installments: 12,
  freeShipping: true,
  tags: [{ label: 'Dia do Consumidor', variant: 'highlight' }],
  image: {
    url: 'https://res.cloudinary.com/ycsxevam/image/upload/produto-athena',
    alt: 'Frasco do perfume Athena',
    width: 184,
    height: 184,
  },
}

describe('ProductCard', () => {
  it('mostra nome com link, desconto calculado, frete grátis e tags', () => {
    render(<ProductCard product={product} />)

    expect(screen.getByRole('link', { name: product.name })).toHaveAttribute('href', product.href)
    expect(screen.getByText('20%')).toBeInTheDocument()
    expect(screen.getByText('Frete grátis')).toBeInTheDocument()
    expect(screen.getByText('Dia do Consumidor')).toBeInTheDocument()
  })

  it('carrega a imagem otimizada pelo Cloudinary, com srcset e lazy loading', () => {
    const { container } = render(<ProductCard product={product} />)
    const image = container.querySelector('img')

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('/upload/f_auto,q_auto,c_limit,w_210/'),
    )
    expect(image).toHaveAttribute('srcset', expect.stringContaining('420w'))
    expect(image).toHaveAttribute('loading', 'lazy')
  })

  it('chama onAddToCart com o produto ao clicar em comprar', async () => {
    const onAddToCart = vi.fn<(product: Product) => void>()
    render(<ProductCard product={product} onAddToCart={onAddToCart} />)

    await userEvent.click(screen.getByRole('button', { name: `Comprar ${product.name}` }))

    expect(onAddToCart).toHaveBeenCalledWith(product)
  })

  it('alterna o favorito e informa o estado para leitores de tela', async () => {
    render(<ProductCard product={product} />)
    const favorite = screen.getByRole('button', { name: `Favoritar ${product.name}` })

    expect(favorite).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(favorite)

    expect(favorite).toHaveAttribute('aria-pressed', 'true')
    expect(favorite).toHaveAccessibleName(`Remover ${product.name} dos favoritos`)
  })

  it('não mostra selo de desconto quando não há preço "de"', () => {
    render(<ProductCard product={{ ...product, listPrice: undefined }} />)

    expect(screen.queryByText(/%$/)).toBeNull()
  })
})
