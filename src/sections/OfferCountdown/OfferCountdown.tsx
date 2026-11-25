import { Fragment } from 'react'
import { Container } from '@/components/Container/Container'
import { useCountdown, type TimeLeft } from '@/hooks/useCountdown'
import { useCampaign } from '@/hooks/useStoreData'

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'dias' },
  { key: 'hours', label: 'horas' },
  { key: 'minutes', label: 'minutos' },
  { key: 'seconds', label: 'segundos' },
]

const pad = (value: number) => String(value).padStart(2, '0')

/** "Ofertas limitadas" com contador regressivo (Figma: fundo #F0F0F0, título 32px itálico 700). */
export function OfferCountdown() {
  const { data } = useCampaign()
  if (!data) return <div className="h-21.75 bg-surface-100" />

  const { offer } = data
  return (
    <section aria-labelledby="offer-title" className="bg-surface-100">
      <Container className="flex flex-col items-center justify-between gap-3 py-3 text-center md:flex-row md:text-left">
        <div className="flex flex-col gap-1">
          <h2
            id="offer-title"
            className="text-2xl leading-none font-bold text-neutral-800 uppercase italic md:text-offer"
          >
            {offer.title}
          </h2>
          <p className="text-base leading-none text-countdown">{offer.subtitle}</p>
        </div>
        <Countdown endsAt={offer.endsAt} />
      </Container>
    </section>
  )
}

function Countdown({ endsAt }: { endsAt: string }) {
  const timeLeft = useCountdown(endsAt)
  const spoken = `Termina em ${timeLeft.days} dias, ${timeLeft.hours} horas e ${timeLeft.minutes} minutos`

  return (
    <div className="text-countdown">
      {/* O valor muda a cada segundo: leitores de tela recebem só o texto resumido, sem anúncios. */}
      <p className="sr-only">{spoken}</p>
      <div aria-hidden="true" className="flex items-start gap-3">
        {UNITS.map(({ key, label }, index) => (
          <Fragment key={key}>
            {index > 0 && <span className="text-xl leading-none font-semibold">:</span>}
            <span className="flex flex-col items-center gap-1">
              <span className="text-countdown-number font-medium tabular-nums">
                {pad(timeLeft[key])}
              </span>
              <span className="text-micro leading-none uppercase">{label}</span>
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
