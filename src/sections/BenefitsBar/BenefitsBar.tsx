import { Container } from '@/components/Container/Container'
import { Icon, type IconName } from '@/components/Icon/Icon'
import { useCampaign } from '@/hooks/useStoreData'
import type { BenefitIcon } from '@/types/api'
import { cn } from '@/utils/cn'

const benefitIcons: Record<BenefitIcon, IconName> = {
  pix: 'pix',
  truck: 'truck',
  card: 'card',
  store: 'store',
}

/** Barra de vantagens (Figma: fundo #F5F5F5, 45px de respiro, ícone amarelo num círculo com borda). */
export function BenefitsBar() {
  const { data } = useCampaign()

  return (
    <section aria-label="Vantagens" className="bg-surface-50">
      <Container className="py-6 md:py-11.25">
        {data && (
          <ul className="grid grid-cols-2 gap-4 md:flex md:justify-center md:gap-8">
            {data.benefits.map((benefit) => (
              <li key={benefit.id} className="flex items-center gap-2">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-primary">
                  <Icon name={benefitIcons[benefit.icon]} className="size-4.5" />
                </span>
                <p
                  className={cn(
                    'text-xs leading-tight uppercase',
                    benefit.layout === 'stacked' ? 'flex flex-col' : 'flex gap-1',
                  )}
                >
                  {benefit.parts.map((part) => (
                    <span key={part.text} className={part.bold ? 'font-bold' : 'normal-case'}>
                      {part.text}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}
