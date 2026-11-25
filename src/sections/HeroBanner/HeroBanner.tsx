import { BannerLink } from '@/components/BannerLink/BannerLink'
import { Carousel } from '@/components/Carousel/Carousel'
import { useBanners } from '@/hooks/useStoreData'

/** Banner principal (Figma: 1280×372, largura total). Em carrossel, pronto para mais slides. */
export function HeroBanner() {
  const { data, isLoading } = useBanners()
  const slides = data?.hero.items ?? []

  if (!isLoading && slides.length === 0) return null

  return (
    <section aria-label="Destaques" className="mx-auto max-w-7xl">
      {isLoading ? (
        <div className="aspect-1280/372 animate-pulse bg-surface-100" />
      ) : (
        <Carousel
          label="Destaques"
          slideClassName="w-full"
          gapClassName="gap-0"
          className="[&_ul]:py-0"
        >
          {slides.map((banner, index) => (
            <BannerLink
              key={banner.id}
              banner={banner}
              sizes="(min-width: 1280px) 1280px, 100vw"
              widths={[640, 1280, 2560]}
              priority={index === 0}
              className="aspect-1280/372"
            />
          ))}
        </Carousel>
      )}
    </section>
  )
}
