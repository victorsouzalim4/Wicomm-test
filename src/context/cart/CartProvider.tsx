import { useEffect, useMemo, useReducer, type ReactNode } from 'react'
import { CartContext, type CartContextValue } from './CartContext'
import { cartReducer, countItems } from './cartReducer'
import { CART_STORAGE_KEY, loadCartLines, saveCartLines } from './cartStorage'

/** Estado global do carrinho (ADR-0006): Context + useReducer, com cópia no localStorage. */
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, () => ({
    lines: loadCartLines(),
    // O mini cart começa fechado: o estado aberto/fechado não é salvo.
    isOpen: false,
  }))

  useEffect(() => {
    saveCartLines(state.lines)
  }, [state.lines])

  // Mantém as abas sincronizadas: quando outra aba muda o carrinho, esta recebe a versão nova
  // (sem isso, a última aba a gravar apagaria o que a outra adicionou).
  useEffect(() => {
    const syncFromOtherTab = (event: StorageEvent) => {
      if (event.key === CART_STORAGE_KEY)
        dispatch({ type: 'REPLACE_LINES', lines: loadCartLines() })
    }
    window.addEventListener('storage', syncFromOtherTab)
    return () => window.removeEventListener('storage', syncFromOtherTab)
  }, [])

  const value = useMemo<CartContextValue>(
    () => ({
      lines: state.lines,
      itemCount: countItems(state.lines),
      isOpen: state.isOpen,
      addItem: (productId) => dispatch({ type: 'ADD_ITEM', productId }),
      removeItem: (productId) => dispatch({ type: 'REMOVE_ITEM', productId }),
      updateQuantity: (productId, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', productId, quantity }),
      openCart: () => dispatch({ type: 'OPEN_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    }),
    [state],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
