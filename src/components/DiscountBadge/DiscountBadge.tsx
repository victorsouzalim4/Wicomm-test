import { cn } from '@/utils/cn'

interface DiscountBadgeProps {
  percent: number
  className?: string
}

/** Selo de desconto (Figma: 35×18px, cantos de 4px, Inter 500 13px, -12%, fundo amarelo). */
export function DiscountBadge({ percent, className }: DiscountBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex h-4.5 min-w-8.75 items-center justify-center rounded bg-primary px-1 font-badge text-caption font-medium tracking-badge text-white',
        className,
      )}
    >
      <span className="sr-only">Desconto de </span>
      {percent}%
    </span>
  )
}
