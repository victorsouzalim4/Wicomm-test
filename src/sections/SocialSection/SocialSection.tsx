import { Carousel } from '@/components/Carousel/Carousel'
import { Container } from '@/components/Container/Container'
import { useSocial } from '@/hooks/useStoreData'
import { buildSrcSet, optimizeImage } from '@/utils/image'

/** Redes sociais (Figma: texto 20px peso 300 numa caixa branca de 248px, posts de 249px). */
export function SocialSection() {
  const { data } = useSocial()
  if (!data) return null

  return (
    <section aria-labelledby="social-title" className="py-8">
      <Container className="flex flex-col gap-5 md:flex-row md:items-center">
        <h2
          id="social-title"
          className="shrink-0 text-xl font-light md:w-62 md:pr-8 md:shadow-social"
        >
          {data.title}{' '}
          <a
            href={data.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            {data.handle}
            <span className="sr-only"> (abre o Instagram em outra aba)</span>
          </a>
        </h2>

        <Carousel
          label="Posts do Instagram"
          slideClassName="w-62.25"
          gapClassName="gap-5"
          showDots={false}
          className="min-w-0 flex-1"
        >
          {data.posts.map((post) => (
            <a key={post.id} href={post.href} target="_blank" rel="noreferrer" className="block">
              <img
                src={optimizeImage(post.image.url, { width: 249 })}
                srcSet={buildSrcSet(post.image.url, [249, 498])}
                sizes="249px"
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded object-cover"
              />
            </a>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}
