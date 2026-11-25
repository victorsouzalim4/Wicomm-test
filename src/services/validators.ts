/**
 * Validação em tempo de execução das respostas da API.
 * O TypeScript não consegue garantir o formato de um JSON que chega pela rede,
 * então cada resposta é conferida antes de ser usada.
 */
import type {
  Banner,
  BannerGroup,
  BannersResponse,
  Benefit,
  BlogPost,
  BlogResponse,
  CampaignResponse,
  Cause,
  CausesResponse,
  FooterResponse,
  ImageAsset,
  Link,
  NavItem,
  NavigationResponse,
  Product,
  ProductTag,
  ProductsResponse,
  Shelf,
  ShelvesResponse,
  SocialPost,
  SocialResponse,
  TextPart,
} from '@/types/api'

type Guard<T> = (value: unknown) => value is T

/* ---------- Blocos básicos ---------- */

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const isString = (value: unknown): value is string => typeof value === 'string'

const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value)

const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'

const isOptional =
  <T>(guard: Guard<T>) =>
  (value: unknown): value is T | undefined =>
    value === undefined || guard(value)

const isArrayOf =
  <T>(guard: Guard<T>) =>
  (value: unknown): value is T[] =>
    Array.isArray(value) && value.every(guard)

const isOneOf =
  <T extends string>(options: readonly T[]) =>
  (value: unknown): value is T =>
    isString(value) && (options as readonly string[]).includes(value)

/**
 * Cria um validador a partir de um "molde" com um validador por campo.
 * O tipo do molde exige todos os campos de T: se um campo novo for adicionado
 * ao tipo e esquecido aqui, o TypeScript acusa o erro.
 */
const hasShape =
  <T>(shape: { [K in keyof T]-?: Guard<T[K]> }): Guard<T> =>
  (value: unknown): value is T =>
    isRecord(value) &&
    Object.entries(shape).every(([key, guard]) => (guard as Guard<unknown>)(value[key]))

/* ---------- Tipos compartilhados ---------- */

export const isImageAsset = hasShape<ImageAsset>({
  url: isString,
  alt: isString,
  width: isNumber,
  height: isNumber,
})

const isLink = hasShape<Link>({ label: isString, href: isString })

const isTextPart = hasShape<TextPart>({ text: isString, bold: isOptional(isBoolean) })

/* ---------- Respostas ---------- */

const isProductTag = hasShape<ProductTag>({
  label: isString,
  variant: isOneOf(['dark', 'highlight']),
})

const isProduct = hasShape<Product>({
  id: isString,
  name: isString,
  href: isString,
  price: isNumber,
  listPrice: isOptional(isNumber),
  installments: isNumber,
  freeShipping: isBoolean,
  tags: isArrayOf(isProductTag),
  image: isImageAsset,
})

export const isProductsResponse = hasShape<ProductsResponse>({ products: isArrayOf(isProduct) })

const isShelf = hasShape<Shelf>({ id: isString, title: isString, productIds: isArrayOf(isString) })

export const isShelvesResponse = hasShape<ShelvesResponse>({ shelves: isArrayOf(isShelf) })

const isBanner = hasShape<Banner>({ id: isString, href: isString, image: isImageAsset })

const isBannerGroup = hasShape<BannerGroup>({
  title: isOptional(isString),
  items: isArrayOf(isBanner),
})

export const isBannersResponse = hasShape<BannersResponse>({
  hero: isBannerGroup,
  launches: isBannerGroup,
  haircare: isBannerGroup,
  reseller: isBannerGroup,
})

const isBenefit = hasShape<Benefit>({
  id: isString,
  icon: isOneOf(['pix', 'truck', 'card', 'store']),
  layout: isOneOf(['inline', 'stacked']),
  parts: isArrayOf(isTextPart),
})

export const isCampaignResponse = hasShape<CampaignResponse>({
  announcement: hasShape<CampaignResponse['announcement']>({
    parts: isArrayOf(isTextPart),
    badge: isString,
  }),
  offer: hasShape<CampaignResponse['offer']>({
    title: isString,
    subtitle: isString,
    endsAt: (value): value is string => isString(value) && !Number.isNaN(Date.parse(value)),
  }),
  benefits: isArrayOf(isBenefit),
})

const isBlogPost = hasShape<BlogPost>({
  id: isString,
  title: isString,
  excerpt: isString,
  href: isString,
  image: isImageAsset,
})

export const isBlogResponse = hasShape<BlogResponse>({
  title: isString,
  posts: isArrayOf(isBlogPost),
})

const isCause = hasShape<Cause>({
  id: isString,
  title: isString,
  description: isString,
  image: isImageAsset,
})

export const isCausesResponse = hasShape<CausesResponse>({
  title: isString,
  causes: isArrayOf(isCause),
})

const isSocialPost = hasShape<SocialPost>({ id: isString, href: isString, image: isImageAsset })

export const isSocialResponse = hasShape<SocialResponse>({
  title: isString,
  handle: isString,
  profileUrl: isString,
  posts: isArrayOf(isSocialPost),
})

const isNavItem = hasShape<NavItem>({
  label: isString,
  href: isString,
  variant: isOptional(isOneOf(['reseller', 'promo'])),
  children: isOptional(isArrayOf(isLink)),
})

export const isNavigationResponse = hasShape<NavigationResponse>({ items: isArrayOf(isNavItem) })

type FooterColumn = FooterResponse['columns'][number]
type FooterAddress = FooterResponse['addresses'][number]
type FooterSocial = FooterResponse['social'][number]

export const isFooterResponse = hasShape<FooterResponse>({
  newsletter: hasShape<FooterResponse['newsletter']>({ title: isString, subtitle: isString }),
  about: hasShape<FooterResponse['about']>({ text: isString, href: isString }),
  columns: isArrayOf(hasShape<FooterColumn>({ title: isString, links: isArrayOf(isLink) })),
  contact: hasShape<FooterResponse['contact']>({
    phone: isString,
    phoneNote: isString,
    email: isString,
  }),
  addresses: isArrayOf(hasShape<FooterAddress>({ label: isString, address: isString })),
  social: isArrayOf(
    hasShape<FooterSocial>({
      network: isOneOf(['facebook', 'youtube', 'instagram']),
      href: isString,
    }),
  ),
  seal: isImageAsset,
  paymentMethods: isArrayOf(
    isOneOf(['amex', 'diners', 'visa', 'mastercard', 'elo', 'pix', 'boleto']),
  ),
})
