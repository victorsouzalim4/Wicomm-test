import { Button } from '@/components/Button/Button'
import { Drawer } from '@/components/Drawer/Drawer'
import { IconButton } from '@/components/IconButton/IconButton'
import { Price } from '@/components/Price/Price'
import { QuantitySelector } from '@/components/QuantitySelector/QuantitySelector'
import { MAX_QUANTITY } from '@/context/cart/cartReducer'
import { useCart } from '@/hooks/useCart'
import { useProducts } from '@/hooks/useStoreData'
import type { Product } from '@/types/api'
import { optimizeImage } from '@/utils/image'
import { formatPrice } from '@/utils/price'

/** Carrinho lateral: abre pelo ícone do header e ao adicionar um produto. */
export function MiniCart() {
  const { lines, itemCount, isOpen, closeCart, updateQuantity, removeItem } = useCart()
  const { data } = useProducts()

  const productsById = new Map(data?.products.map((product) => [product.id, product]))
  const items = lines.flatMap((line) => {
    const product = productsById.get(line.productId)
    return product ? [{ product, quantity: line.quantity }] : []
  })
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0)

  return (
    <Drawer
      open={isOpen}
      onClose={closeCart}
      title={`Meu carrinho (${itemCount})`}
      footer={
        items.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <strong className="text-lg">{formatPrice(subtotal)}</strong>
            </p>
            <Button fullWidth className="h-12">
              Finalizar compra
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="cursor-pointer text-sm underline underline-offset-2"
            >
              Continuar comprando
            </button>
          </div>
        )
      }
    >
      {items.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
          <p className="text-sm">Seu carrinho está vazio.</p>
          <Button variant="dark" onClick={closeCart} className="px-6">
            Ver produtos
          </Button>
        </div>
      ) : (
        <ul className="flex flex-col divide-y divide-surface-200 px-5">
          {items.map(({ product, quantity }) => (
            <CartItem
              key={product.id}
              product={product}
              quantity={quantity}
              onChangeQuantity={(value) => updateQuantity(product.id, value)}
              onRemove={() => removeItem(product.id)}
            />
          ))}
        </ul>
      )}
    </Drawer>
  )
}

interface CartItemProps {
  product: Product
  quantity: number
  onChangeQuantity: (quantity: number) => void
  onRemove: () => void
}

function CartItem({ product, quantity, onChangeQuantity, onRemove }: CartItemProps) {
  return (
    <li className="flex gap-4 py-4">
      <img
        src={optimizeImage(product.image.url, { width: 160 })}
        alt=""
        width={80}
        height={80}
        className="size-20 shrink-0 rounded-lg object-contain shadow-card"
      />
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <a href={product.href} className="text-sm font-medium hover:underline">
            {product.name}
          </a>
          <IconButton
            icon="trash"
            label={`Remover ${product.name} do carrinho`}
            onClick={onRemove}
            className="size-8 shrink-0 hover:text-red-700"
            iconClassName="size-4.5"
          />
        </div>
        <Price price={product.price} listPrice={product.listPrice} />
        <QuantitySelector
          value={quantity}
          max={MAX_QUANTITY}
          itemName={product.name}
          onChange={onChangeQuantity}
        />
      </div>
    </li>
  )
}
