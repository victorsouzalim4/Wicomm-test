import { describe, expect, it } from 'vitest'
import { MAX_QUANTITY, cartReducer, countItems, type CartState } from './cartReducer'

const empty: CartState = { lines: [], isOpen: false }
const withAthena: CartState = { lines: [{ productId: 'athena', quantity: 2 }], isOpen: false }

describe('cartReducer', () => {
  it('adiciona um produto novo com quantidade 1 e abre o mini cart', () => {
    expect(cartReducer(empty, { type: 'ADD_ITEM', productId: 'athena' })).toEqual({
      lines: [{ productId: 'athena', quantity: 1 }],
      isOpen: true,
    })
  })

  it('soma 1 quando o produto já está no carrinho', () => {
    const state = cartReducer(withAthena, { type: 'ADD_ITEM', productId: 'athena' })

    expect(state.lines).toEqual([{ productId: 'athena', quantity: 3 }])
  })

  it(`não passa de ${MAX_QUANTITY} unidades`, () => {
    const full: CartState = {
      lines: [{ productId: 'athena', quantity: MAX_QUANTITY }],
      isOpen: false,
    }

    expect(cartReducer(full, { type: 'ADD_ITEM', productId: 'athena' }).lines[0].quantity).toBe(
      MAX_QUANTITY,
    )
  })

  it('atualiza a quantidade e remove o item quando ela chega a zero', () => {
    const updated = cartReducer(withAthena, {
      type: 'UPDATE_QUANTITY',
      productId: 'athena',
      quantity: 5,
    })
    expect(updated.lines).toEqual([{ productId: 'athena', quantity: 5 }])

    const removed = cartReducer(updated, {
      type: 'UPDATE_QUANTITY',
      productId: 'athena',
      quantity: 0,
    })
    expect(removed.lines).toEqual([])
  })

  it('remove o item', () => {
    expect(cartReducer(withAthena, { type: 'REMOVE_ITEM', productId: 'athena' }).lines).toEqual([])
  })

  it('abre, fecha e substitui as linhas (sincronização entre abas)', () => {
    expect(cartReducer(empty, { type: 'OPEN_CART' }).isOpen).toBe(true)
    expect(cartReducer({ ...empty, isOpen: true }, { type: 'CLOSE_CART' }).isOpen).toBe(false)
    expect(cartReducer(empty, { type: 'REPLACE_LINES', lines: withAthena.lines }).lines).toBe(
      withAthena.lines,
    )
  })

  it('conta o total de unidades', () => {
    expect(
      countItems([
        { productId: 'a', quantity: 2 },
        { productId: 'b', quantity: 3 },
      ]),
    ).toBe(5)
  })
})
