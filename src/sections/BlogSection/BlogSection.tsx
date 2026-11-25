import { Container } from '@/components/Container/Container'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import { useBlog } from '@/hooks/useStoreData'
import { buildSrcSet, optimizeImage } from '@/utils/image'

/** "Nosso Blog" (Figma: cards de 376px, imagem 376×170, texto com padding 40×16 e sombra). */
export function BlogSection() {
  const { data } = useBlog()
  if (!data) return null

  return (
    <section aria-labelledby="blog-title" className="py-8">
      <Container className="flex flex-col gap-5">
        <SectionTitle id="blog-title">{data.title}</SectionTitle>
        <ul className="grid gap-4 md:grid-cols-3">
          {data.posts.map((post) => (
            <li key={post.id}>
              <article className="group relative flex h-full flex-col shadow-blog">
                <img
                  src={optimizeImage(post.image.url, { width: 376 })}
                  srcSet={buildSrcSet(post.image.url, [376, 752])}
                  sizes="(min-width: 768px) 376px, 100vw"
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-376/170 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-4 bg-white px-4 py-6 md:py-10">
                  <h3 className="text-xl font-medium">
                    {/* O link cobre o card todo (::after), mas só o título é lido como link. */}
                    <a
                      href={post.href}
                      className="group-hover:underline after:absolute after:inset-0"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-sm">{post.excerpt}</p>
                  <p aria-hidden="true" className="mt-auto text-sm font-medium uppercase">
                    Leia mais
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
