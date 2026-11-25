import type { ProductTag } from '@/types/api'
import { cn } from '@/utils/cn'

const variantClasses: Record<ProductTag['variant'], string> = {
  dark: 'bg-black',
  highlight: 'bg-highlight',
}

/** Etiqueta do card de produto (Figma: 18px de altura, cantos de 4px, Poppins 13px, -4%). */
export function Tag({ label, variant }: ProductTag) {
  return (
    <span
      className={cn(
        'inline-flex h-4.5 items-center rounded px-2 text-caption tracking-button text-white uppercase',
        variantClasses[variant],
      )}
    >
      {label}
    </span>
  )
}
