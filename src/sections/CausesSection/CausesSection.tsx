import { Container } from '@/components/Container/Container'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import { useCauses } from '@/hooks/useStoreData'
import { optimizeImage } from '@/utils/image'

/** "Nossas Causas" (Figma: fundo #EEEEEE, título 14px peso 500, texto 12px peso 300 centralizado). */
export function CausesSection() {
  const { data } = useCauses()
  if (!data) return null

  return (
    <section aria-labelledby="causes-title" className="bg-surface-200 py-8">
      <Container className="flex flex-col gap-5">
        <SectionTitle id="causes-title">{data.title}</SectionTitle>
        <ul className="grid gap-4 md:grid-cols-3">
          {data.causes.map((cause) => (
            <li
              key={cause.id}
              className="flex flex-col items-center gap-2 rounded border border-neutral-300 px-8 py-7 text-center md:px-15"
            >
              <img
                src={optimizeImage(cause.image.url, { width: 260 })}
                alt={cause.image.alt}
                width={130}
                height={143}
                loading="lazy"
                decoding="async"
                className="h-26 w-auto object-contain"
              />
              <h3 className="text-sm font-medium">{cause.title}</h3>
              <p className="text-xs font-light">{cause.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
