import { BannerLink } from '@/components/BannerLink/BannerLink'
import { Container } from '@/components/Container/Container'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import { useBanners } from '@/hooks/useStoreData'
import type { BannerGroup } from '@/types/api'

interface BannerSectionProps {
  id: string
  group: BannerGroup
  children: (group: BannerGroup) => React.ReactNode
}

/** Estrutura comum às seções de banners: título opcional + grid definido por quem usa. */
function BannerSection({ id, group, children }: BannerSectionProps) {
  if (group.items.length === 0) return null
  const titleId = `banners-${id}`

  return (
    <section
      aria-labelledby={group.title ? titleId : undefined}
      aria-label={group.title ? undefined : 'Seja um consultor'}
      className="py-8"
    >
      <Container className="flex flex-col gap-4">
        {group.title && <SectionTitle id={titleId}>{group.title}</SectionTitle>}
        {children(group)}
      </Container>
    </section>
  )
}

/** "Potencialize sua saúde...": 1 banner grande e 2 empilhados (Figma: 556 + 597px, 681px de altura). */
export function PromoBannerGrid() {
  const { data } = useBanners()
  if (!data) return null

  return (
    <BannerSection id="launches" group={data.launches}>
      {({ items: [featured, ...others] }) => (
        <div className="grid gap-4 md:grid-cols-[556fr_597fr] md:grid-rows-2">
          <BannerLink
            banner={featured}
            sizes="(min-width: 768px) 556px, 100vw"
            widths={[556, 1112]}
            className="md:row-span-2"
          />
          {others.map((banner) => (
            <BannerLink
              key={banner.id}
              banner={banner}
              sizes="(min-width: 768px) 597px, 100vw"
              widths={[597, 1194]}
            />
          ))}
        </div>
      )}
    </BannerSection>
  )
}

/** "Desvende o segredo dos cabelos perfeitos...": 4 banners verticais (Figma: 281×417). */
export function CategoryBanners() {
  const { data } = useBanners()
  if (!data) return null

  return (
    <BannerSection id="haircare" group={data.haircare}>
      {({ items }) => (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((banner) => (
            <BannerLink
              key={banner.id}
              banner={banner}
              sizes="(min-width: 768px) 281px, 50vw"
              widths={[281, 562]}
              className="aspect-881/1309"
            />
          ))}
        </div>
      )}
    </BannerSection>
  )
}

/** Banners do consultor: 2 lado a lado (Figma: 575×333, 20px de espaço). */
export function ResellerBanners() {
  const { data } = useBanners()
  if (!data) return null

  return (
    <BannerSection id="reseller" group={data.reseller}>
      {({ items }) => (
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {items.map((banner) => (
            <BannerLink
              key={banner.id}
              banner={banner}
              sizes="(min-width: 768px) 575px, 100vw"
              widths={[575, 1144]}
              className="aspect-575/333"
            />
          ))}
        </div>
      )}
    </BannerSection>
  )
}
