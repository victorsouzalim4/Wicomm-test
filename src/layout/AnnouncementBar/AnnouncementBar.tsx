import { useCampaign } from '@/hooks/useStoreData'

/** Barra de avisos (Figma: 47px, fundo #F3A07A, texto 20px peso 300/600, etiqueta preta 10px). */
export function AnnouncementBar() {
  const { data } = useCampaign()

  return (
    <section
      aria-label="Avisos"
      className="flex min-h-11.75 flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-announcement px-4 py-2 text-center"
    >
      {data && (
        <>
          <p className="text-base font-light uppercase md:text-xl">
            {data.announcement.parts.map((part) => (
              <span key={part.text} className={part.bold ? 'font-semibold' : undefined}>
                {part.text}
              </span>
            ))}
            <span aria-hidden="true"> ✦</span>
          </p>
          <p className="rounded bg-black px-4 py-1 text-micro font-bold text-white uppercase">
            {data.announcement.badge}
          </p>
        </>
      )}
    </section>
  )
}
