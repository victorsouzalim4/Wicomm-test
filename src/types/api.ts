/**
 * Formato das respostas da API mock (public/api/*.json). Ver ADR-0010.
 * Preços em centavos (25500 = R$ 255,00).
 */

export interface ImageAsset {
  /** URL original no Cloudinary. O front aplica as transformações com optimizeImage(). */
  url: string
  alt: string
  /** Dimensões do arquivo original, usadas para reservar espaço e evitar CLS. */
  width: number
  height: number
}

export interface Link {
  label: string
  href: string
}

/* ---------- /api/products.json ---------- */

export interface ProductTag {
  label: string
  variant: 'dark' | 'highlight'
}

export interface Product {
  id: string
  name: string
  href: string
  price: number
  /** Preço "de", quando há desconto. O percentual do selo é calculado no front. */
  listPrice?: number
  /** Número máximo de parcelas sem juros. O valor da parcela é calculado no front. */
  installments: number
  freeShipping: boolean
  tags: ProductTag[]
  image: ImageAsset
}

export interface ProductsResponse {
  products: Product[]
}

/* ---------- /api/shelves.json ---------- */

export interface Shelf {
  id: string
  title: string
  productIds: string[]
}

export interface ShelvesResponse {
  shelves: Shelf[]
}

/* ---------- /api/banners.json ---------- */

export interface Banner {
  id: string
  href: string
  image: ImageAsset
}

export interface BannerGroup {
  title?: string
  items: Banner[]
}

export interface BannersResponse {
  hero: BannerGroup
  launches: BannerGroup
  haircare: BannerGroup
  reseller: BannerGroup
}

/* ---------- /api/campaign.json ---------- */

export interface TextPart {
  text: string
  bold?: boolean
}

export type BenefitIcon = 'pix' | 'truck' | 'card' | 'store'

export interface Benefit {
  id: string
  icon: BenefitIcon
  /** 'inline': partes na mesma linha. 'stacked': uma parte por linha. */
  layout: 'inline' | 'stacked'
  parts: TextPart[]
}

export interface CampaignResponse {
  announcement: {
    parts: TextPart[]
    badge: string
  }
  offer: {
    title: string
    subtitle: string
    /** Data ISO 8601 em que o contador regressivo termina. */
    endsAt: string
  }
  benefits: Benefit[]
}

/* ---------- /api/blog.json ---------- */

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  href: string
  image: ImageAsset
}

export interface BlogResponse {
  title: string
  posts: BlogPost[]
}

/* ---------- /api/causes.json ---------- */

export interface Cause {
  id: string
  title: string
  description: string
  image: ImageAsset
}

export interface CausesResponse {
  title: string
  causes: Cause[]
}

/* ---------- /api/social.json ---------- */

export interface SocialPost {
  id: string
  href: string
  image: ImageAsset
}

export interface SocialResponse {
  title: string
  handle: string
  profileUrl: string
  posts: SocialPost[]
}

/* ---------- /api/navigation.json ---------- */

export interface NavItem {
  label: string
  href: string
  /** 'reseller': botão com borda (Revenda). 'promo': destaque amarelo (Promoções). */
  variant?: 'reseller' | 'promo'
  children?: Link[]
}

export interface NavigationResponse {
  items: NavItem[]
}

/* ---------- /api/footer.json ---------- */

export type SocialNetwork = 'facebook' | 'youtube' | 'instagram'

export type PaymentMethod = 'amex' | 'diners' | 'visa' | 'mastercard' | 'elo' | 'pix' | 'boleto'

export interface FooterResponse {
  newsletter: {
    title: string
    subtitle: string
  }
  about: {
    text: string
    href: string
  }
  columns: {
    title: string
    links: Link[]
  }[]
  contact: {
    phone: string
    phoneNote: string
    email: string
  }
  addresses: {
    label: string
    address: string
  }[]
  social: {
    network: SocialNetwork
    href: string
  }[]
  /** Selo de qualidade exibido abaixo da coluna "Representante". */
  seal: ImageAsset
  paymentMethods: PaymentMethod[]
}
