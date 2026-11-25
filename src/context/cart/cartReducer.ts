/**
 * Regras do carrinho (ADR-0006). Função pura: recebe o estado e uma ação e devolve o novo estado.
 * O carrinho guarda só o id do produto e a quantidade; nome, preço e imagem vêm da API,
 * para nunca mostrar um preço desatualizado.
 */

export interface CartLine {
  productId: string
  quantity: number
}

export interface CartState {
  lines: CartLine[]
  isOpen: boolean
}

export type CartAction =
  | { type: 'ADD_ITEM'; productId: string }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'REPLACE_LINES'; lines: CartLine[] }

export const MAX_QUANTITY = 10

const clampQuantity = (quantity: number) =>
  Math.min(MAX_QUANTITY, Math.max(0, Math.round(quantity)))

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.lines.find((line) => line.productId === action.productId)
      const lines = existing
        ? state.lines.map((line) =>
            line.productId === action.productId
              ? { ...line, quantity: clampQuantity(line.quantity + 1) }
              : line,
          )
        : [...state.lines, { productId: action.productId, quantity: 1 }]
      // Adicionar abre o mini cart, para a pessoa ver o que entrou.
      return { lines, isOpen: true }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        lines: state.lines.filter((line) => line.productId !== action.productId),
      }

    case 'UPDATE_QUANTITY': {
      const quantity = clampQuantity(action.quantity)
      const lines =
        quantity === 0
          ? state.lines.filter((line) => line.productId !== action.productId)
          : state.lines.map((line) =>
              line.productId === action.productId ? { ...line, quantity } : line,
            )
      return { ...state, lines }
    }

    case 'OPEN_CART':
      return { ...state, isOpen: true }

    case 'CLOSE_CART':
      return { ...state, isOpen: false }

    case 'REPLACE_LINES':
      return { ...state, lines: action.lines }
  }
}

export const countItems = (lines: CartLine[]) =>
  lines.reduce((total, line) => total + line.quantity, 0)
