import { useState } from 'react'
import { Button } from '@/components/Button/Button'
import { DiscountBadge } from '@/components/DiscountBadge/DiscountBadge'
import { IconButton } from '@/components/IconButton/IconButton'
import { Price } from '@/components/Price/Price'
import { Tag } from '@/components/Tag/Tag'
import type { Product } from '@/types/api'
import { cn } from '@/utils/cn'
import { buildSrcSet, optimizeImage } from '@/utils/image'
import { discountPercent } from '@/utils/price'

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

/** Largura da área da imagem no Figma (210px) e o dobro, para telas de alta densidade. */
const IMAGE_WIDTHS = [210, 420]

/**
 * Card da vitrine (Figma: 226px de largura, padding 8px, gap 12px, cantos de 8px).
 * O botão "COMPRAR" cobre a parte de baixo da imagem e aparece no hover/foco no desktop.
 * No celular, onde não há hover, ele fica sempre visível.
 */
export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const discount = discountPercent(product.price, product.listPrice)

  return (
    <article className="group flex h-full flex-col gap-3 rounded-lg bg-white p-2 shadow-card">
      <div className="relative">
        {/* A imagem repete o link do título: fica fora da ordem do teclado e dos leitores de tela. */}
        <a href={product.href} tabIndex={-1} aria-hidden="true" className="block">
          <img
            src={optimizeImage(product.image.url, { width: IMAGE_WIDTHS[0] })}
            srcSet={buildSrcSet(product.image.url, IMAGE_WIDTHS)}
            sizes="210px"
            alt=""
            width={product.image.width}
            height={product.image.height}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full object-contain p-5"
          />
        </a>

        {discount > 0 && <DiscountBadge percent={discount} className="absolute top-0 left-0" />}

        <IconButton
          icon="heart"
          label={isFavorite ? `Remover ${product.name} dos favoritos` : `Favoritar ${product.name}`}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((current) => !current)}
          className="absolute top-0 right-0 size-6"
          iconClassName={cn('size-4', isFavorite && '[&_path]:fill-current')}
        />

        <Button
          variant="dark"
          fullWidth
          aria-label={`Comprar ${product.name}`}
          onClick={() => onAddToCart?.(product)}
          className="absolute inset-x-0 bottom-0 md:opacity-0 md:group-focus-within:opacity-100 md:group-hover:opacity-100"
        >
          Comprar
        </Button>
      </div>

      {product.tags.length > 0 && (
        <ul className="flex flex-col items-start gap-1">
          {product.tags.map((tag) => (
            <li key={tag.label}>
              <Tag {...tag} />
            </li>
          ))}
        </ul>
      )}

      {product.freeShipping && (
        <p className="text-sm font-medium text-primary uppercase">Frete grátis</p>
      )}

      <h3 className="text-sm font-medium">
        <a href={product.href} className="hover:underline">
          {product.name}
        </a>
      </h3>

      <Price
        price={product.price}
        listPrice={product.listPrice}
        installments={product.installments}
      />
    </article>
  )
}
