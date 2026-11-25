import { Carousel } from '@/components/Carousel/Carousel'
import { Container } from '@/components/Container/Container'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import { useProducts, useShelves } from '@/hooks/useStoreData'
import type { Product, Shelf } from '@/types/api'

interface ProductShelfProps {
  /** Id da vitrine em /api/shelves.json. */
  shelfId: string
  onAddToCart?: (product: Product) => void
}

/** Largura do card no Figma: 226px (no celular, cabe ~1,5 card e o card cortado indica que dá para arrastar). */
const SLIDE_CLASS = 'w-56.5'

function resolveProducts(shelf: Shelf, products: Product[]): Product[] {
  const byId = new Map(products.map((product) => [product.id, product]))
  return shelf.productIds.flatMap((id) => byId.get(id) ?? [])
}

/** Vitrine de produtos: uma seção para as 3 vitrines do Figma, cada uma com seus dados. */
export function ProductShelf({ shelfId, onAddToCart }: ProductShelfProps) {
  const shelves = useShelves()
  const products = useProducts()

  const shelf = shelves.data?.shelves.find((item) => item.id === shelfId)
  const error = shelves.error ?? products.error
  const isLoading = shelves.isLoading || products.isLoading

  if (error) {
    return (
      <Container className="py-8">
        <p role="alert" className="text-center text-sm">
          Não foi possível carregar os produtos agora. Tente novamente mais tarde.
        </p>
      </Container>
    )
  }

  if (!isLoading && (!shelf || !products.data)) return null

  const items = shelf && products.data ? resolveProducts(shelf, products.data.products) : []
  if (!isLoading && items.length === 0) return null

  return (
    <section aria-labelledby={`shelf-${shelfId}`} aria-busy={isLoading} className="py-8">
      <Container className="flex flex-col gap-4">
        {shelf ? (
          <SectionTitle id={`shelf-${shelfId}`}>{shelf.title}</SectionTitle>
        ) : (
          <div className="mx-auto h-6.5 w-72 animate-pulse rounded bg-surface-100" />
        )}

        {isLoading ? (
          <ProductShelfSkeleton />
        ) : (
          <Carousel label={shelf?.title ?? 'Produtos'} slideClassName={SLIDE_CLASS}>
            {items.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </Carousel>
        )}
      </Container>
    </section>
  )
}

/** Mesmo tamanho dos cards (226×400), para a página não "pular" quando os dados chegam. */
function ProductShelfSkeleton() {
  return (
    <div className="flex gap-2.25 overflow-hidden py-1" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className={`${SLIDE_CLASS} h-100 shrink-0 animate-pulse rounded-lg bg-surface-100`}
        />
      ))}
    </div>
  )
}
