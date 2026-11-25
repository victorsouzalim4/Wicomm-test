import { IconButton } from '@/components/IconButton/IconButton'

interface QuantitySelectorProps {
  value: number
  max: number
  /** Nome do item, para os botões terem um texto claro ("Diminuir quantidade de Perfume Athena"). */
  itemName: string
  onChange: (quantity: number) => void
}

const buttonClasses =
  'size-9 rounded border border-surface-200 transition hover:bg-surface-50 disabled:cursor-not-allowed disabled:opacity-40'

/** − quantidade +. Chegar a zero remove o item (regra do reducer do carrinho). */
export function QuantitySelector({ value, max, itemName, onChange }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <IconButton
        icon="minus"
        label={`Diminuir quantidade de ${itemName}`}
        onClick={() => onChange(value - 1)}
        className={buttonClasses}
        iconClassName="size-4"
      />
      <output
        aria-live="polite"
        aria-label={`Quantidade de ${itemName}`}
        className="w-6 text-center text-sm font-medium"
      >
        {value}
      </output>
      <IconButton
        icon="plus"
        label={`Aumentar quantidade de ${itemName}`}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        className={buttonClasses}
        iconClassName="size-4"
      />
    </div>
  )
}
