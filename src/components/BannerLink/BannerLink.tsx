import type { Banner } from '@/types/api'
import { cn } from '@/utils/cn'
import { buildSrcSet, optimizeImage } from '@/utils/image'

interface BannerLinkProps {
  banner: Banner
  /** Atributo `sizes`: quanto da tela o banner ocupa em cada breakpoint. */
  sizes: string
  /** Larguras geradas no srcset. */
  widths: number[]
  /** O primeiro banner da página carrega com prioridade (ajuda no LCP). */
  priority?: boolean
  className?: string
}

/**
 * Banner clicável. O texto e o botão ("APROVEITE", "COMPRE") fazem parte da imagem,
 * então o banner inteiro é o link e o `alt` repete o texto da imagem.
 */
export function BannerLink({
  banner,
  sizes,
  widths,
  priority = false,
  className,
}: BannerLinkProps) {
  const { image } = banner

  return (
    <a
      href={banner.href}
      className={cn('group block overflow-hidden focus-visible:outline-offset-4', className)}
    >
      <img
        src={optimizeImage(image.url, { width: widths[widths.length - 1] })}
        srcSet={buildSrcSet(image.url, widths)}
        sizes={sizes}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
      />
    </a>
  )
}
