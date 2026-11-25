import { createContext } from 'react'
import type { CartLine } from './cartReducer'

export interface CartContextValue {
  lines: CartLine[]
  itemCount: number
  isOpen: boolean
  addItem: (productId: string) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  openCart: () => void
  closeCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
