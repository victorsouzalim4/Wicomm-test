import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { CartProvider } from '@/context/cart/CartProvider'
import { CART_STORAGE_KEY } from '@/context/cart/cartStorage'
import { useCart } from '@/hooks/useCart'
import { CartButton } from '@/layout/Header/CartButton'
import type { Product } from '@/types/api'
import { MiniCart } from './MiniCart'

const athena: Product = {
  id: 'athena',
  name: 'Perfume Athena',
  href: '/produto/athena',
  price: 25500,
  listPrice: 32000,
  installments: 12,
  freeShipping: true,
  tags: [],
  image: {
    url: 'https://res.cloudinary.com/x/image/upload/athena',
    alt: '',
    width: 184,
    height: 184,
  },
}

// O mini cart busca o catálogo pela API; aqui usamos um catálogo fixo.
vi.mock('@/hooks/useStoreData', () => ({
  useProducts: () => ({ data: { products: [athena] }, isLoading: false, error: null }),
}))

function Store() {
  const { addItem } = useCart()
  return (
    <>
      <CartButton />
      <ProductCard product={athena} onAddToCart={(product) => addItem(product.id)} />
      <MiniCart />
    </>
  )
}

const renderStore = () =>
  render(
    <CartProvider>
      <Store />
    </CartProvider>,
  )

describe('carrinho completo', () => {
  it('adiciona pelo card, abre o mini cart e atualiza o contador do header', async () => {
    renderStore()

    await userEvent.click(screen.getByRole('button', { name: 'Comprar Perfume Athena' }))

    const cart = screen.getByRole('dialog', { name: 'Meu carrinho (1)' })
    expect(within(cart).getByRole('link', { name: 'Perfume Athena' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Abrir carrinho, 1 item' })).toBeInTheDocument()
  })

  it('altera a quantidade, recalcula o subtotal e salva no localStorage', async () => {
    renderStore()
    await userEvent.click(screen.getByRole('button', { name: 'Comprar Perfume Athena' }))

    await userEvent.click(
      screen.getByRole('button', { name: 'Aumentar quantidade de Perfume Athena' }),
    )

    expect(screen.getByRole('dialog', { name: 'Meu carrinho (2)' })).toBeInTheDocument()
    expect(screen.getByText('R$ 510', { selector: 'footer strong' })).toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? '[]')).toEqual([
      { productId: 'athena', quantity: 2 },
    ])
  })

  it('remove o item e mostra o carrinho vazio', async () => {
    renderStore()
    await userEvent.click(screen.getByRole('button', { name: 'Comprar Perfume Athena' }))

    await userEvent.click(
      screen.getByRole('button', { name: 'Remover Perfume Athena do carrinho' }),
    )

    expect(screen.getByText('Seu carrinho está vazio.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Abrir carrinho, 0 itens' })).toBeInTheDocument()
  })

  it('fecha o mini cart pelo botão de fechar', async () => {
    renderStore()
    await userEvent.click(screen.getByRole('button', { name: 'Comprar Perfume Athena' }))

    await userEvent.click(screen.getByRole('button', { name: 'Fechar' }))

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('recupera o carrinho salvo ao carregar a página', () => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([{ productId: 'athena', quantity: 3 }]))

    renderStore()

    expect(screen.getByRole('button', { name: 'Abrir carrinho, 3 itens' })).toBeInTheDocument()
  })
})
