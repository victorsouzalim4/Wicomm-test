import { afterEach, describe, expect, it, vi } from 'vitest'
import { CART_STORAGE_KEY, loadCartLines, saveCartLines } from './cartStorage'

describe('cartStorage', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('salva e lê as linhas do carrinho', () => {
    saveCartLines([{ productId: 'athena', quantity: 2 }])

    expect(loadCartLines()).toEqual([{ productId: 'athena', quantity: 2 }])
  })

  it('começa vazio quando o JSON salvo é inválido', () => {
    localStorage.setItem(CART_STORAGE_KEY, '{quebrado')

    expect(loadCartLines()).toEqual([])
  })

  it('ignora linhas com formato inválido', () => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify([
        { productId: 'athena', quantity: 1 },
        { productId: 'x', quantity: -2 },
        'lixo',
      ]),
    )

    expect(loadCartLines()).toEqual([{ productId: 'athena', quantity: 1 }])
  })

  it('não quebra quando o navegador bloqueia o localStorage', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('bloqueado')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('bloqueado')
    })

    expect(loadCartLines()).toEqual([])
    expect(() => saveCartLines([{ productId: 'athena', quantity: 1 }])).not.toThrow()
  })
})
