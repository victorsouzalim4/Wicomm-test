import { useContext } from 'react'
import { CartContext } from '@/context/cart/CartContext'

export function useCart() {
  const cart = useContext(CartContext)
  if (!cart) throw new Error('useCart precisa estar dentro de <CartProvider>')
  return cart
}
