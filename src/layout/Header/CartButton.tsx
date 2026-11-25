import { Icon } from '@/components/Icon/Icon'
import { useCart } from '@/hooks/useCart'

/** Ícone do carrinho com o contador (Figma: bolinha preta de 14px). Abre o mini cart. */
export function CartButton() {
  const { itemCount, openCart } = useCart()
  const label = itemCount === 1 ? '1 item' : `${itemCount} itens`

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Abrir carrinho, ${label}`}
      aria-haspopup="dialog"
      className="relative inline-flex size-10 cursor-pointer items-center justify-center"
    >
      <Icon name="shopping-bag" className="size-5.5" />
      {itemCount > 0 && (
        <span
          aria-hidden="true"
          className="absolute top-1 right-1 flex size-3.5 items-center justify-center rounded-full bg-black text-micro leading-none font-semibold text-white"
        >
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </button>
  )
}
