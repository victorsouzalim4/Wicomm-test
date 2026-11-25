import { describe, expect, it } from 'vitest'
import { discountPercent, formatPrice, installmentValue } from './price'

// O Intl usa um espaço não separável entre "R$" e o valor.
const brl = (text: string) => text.replace(' ', ' ')

describe('formatPrice', () => {
  it('mostra valores redondos sem centavos, como no Figma', () => {
    expect(formatPrice(25500)).toBe(brl('R$ 255'))
  })

  it('mostra os centavos quando existem', () => {
    expect(formatPrice(2125)).toBe(brl('R$ 21,25'))
  })

  it('usa ponto como separador de milhar', () => {
    expect(formatPrice(123450)).toBe(brl('R$ 1.234,50'))
  })
})

describe('installmentValue', () => {
  it('calcula a parcela a partir do preço (R$ 255 em 12x = R$ 21,25)', () => {
    expect(installmentValue(25500, 12)).toBe(2125)
  })

  it('arredonda para o centavo mais próximo', () => {
    expect(installmentValue(10000, 3)).toBe(3333)
  })
})

describe('discountPercent', () => {
  it('calcula o desconto entre o preço "de" e o preço atual (R$ 320 → R$ 255 = 20%)', () => {
    expect(discountPercent(25500, 32000)).toBe(20)
  })

  it('devolve 0 quando não há preço "de"', () => {
    expect(discountPercent(25500)).toBe(0)
  })

  it('devolve 0 quando o preço "de" não é maior que o atual', () => {
    expect(discountPercent(25500, 25500)).toBe(0)
  })
})
