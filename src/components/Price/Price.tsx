import { formatPrice, installmentValue } from '@/utils/price'

interface PriceProps {
  /** Valores em centavos. */
  price: number
  listPrice?: number
  installments?: number
}

/**
 * Preço "de/por" e parcelamento. O valor da parcela é calculado a partir do preço
 * (ver "Interpretações do layout" no README).
 */
export function Price({ price, listPrice, installments }: PriceProps) {
  const hasDiscount = listPrice !== undefined && listPrice > price

  return (
    <div className="flex flex-col gap-1">
      <p className="flex items-baseline gap-1.5">
        {hasDiscount && (
          <>
            <span className="sr-only">De</span>
            <s className="text-caption font-light">{formatPrice(listPrice)}</s>
            <span className="sr-only">por</span>
          </>
        )}
        <strong className="text-sm font-bold">{formatPrice(price)}</strong>
      </p>
      {installments !== undefined && installments > 1 && (
        <p className="text-sm font-light">
          {installments}x {formatPrice(installmentValue(price, installments))} sem juros
        </p>
      )}
    </div>
  )
}
