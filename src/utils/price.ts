/**
 * Valores derivados do preço. A API guarda só o preço, o preço "de" e o número de parcelas;
 * o resto é calculado aqui para nunca contradizer o preço (ver "Interpretações do layout" no README).
 * Todos os valores estão em centavos.
 */

const wholeReais = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

const withCents = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
})

/** Formata em reais. Valores redondos ficam sem centavos, como no Figma ("R$ 255"). */
export function formatPrice(cents: number): string {
  const formatter = cents % 100 === 0 ? wholeReais : withCents
  return formatter.format(cents / 100)
}

/** Valor de cada parcela, em centavos. */
export function installmentValue(price: number, installments: number): number {
  return Math.round(price / installments)
}

/** Percentual de desconto entre o preço "de" e o preço atual, arredondado. */
export function discountPercent(price: number, listPrice?: number): number {
  if (!listPrice || listPrice <= price) return 0
  return Math.round((1 - price / listPrice) * 100)
}
