import { describe, expect, it } from 'vitest'
import banners from '../../public/api/banners.json'
import blog from '../../public/api/blog.json'
import campaign from '../../public/api/campaign.json'
import causes from '../../public/api/causes.json'
import footer from '../../public/api/footer.json'
import navigation from '../../public/api/navigation.json'
import products from '../../public/api/products.json'
import shelves from '../../public/api/shelves.json'
import social from '../../public/api/social.json'
import {
  isBannersResponse,
  isBlogResponse,
  isCampaignResponse,
  isCausesResponse,
  isFooterResponse,
  isNavigationResponse,
  isProductsResponse,
  isShelvesResponse,
  isSocialResponse,
} from './validators'

describe('validadores com os JSONs reais da API mock', () => {
  it.each([
    ['products.json', products, isProductsResponse],
    ['shelves.json', shelves, isShelvesResponse],
    ['banners.json', banners, isBannersResponse],
    ['campaign.json', campaign, isCampaignResponse],
    ['blog.json', blog, isBlogResponse],
    ['causes.json', causes, isCausesResponse],
    ['social.json', social, isSocialResponse],
    ['navigation.json', navigation, isNavigationResponse],
    ['footer.json', footer, isFooterResponse],
  ] as const)('%s tem o formato esperado', (_name, data, validate) => {
    expect(validate(data)).toBe(true)
  })
})

describe('validadores com dados inválidos', () => {
  const [firstProduct] = products.products

  it('recusa um produto sem preço', () => {
    const { price: _price, ...withoutPrice } = firstProduct

    expect(isProductsResponse({ products: [withoutPrice] })).toBe(false)
  })

  it('recusa uma tag com variante desconhecida', () => {
    const product = { ...firstProduct, tags: [{ label: 'Promo', variant: 'neon' }] }

    expect(isProductsResponse({ products: [product] })).toBe(false)
  })

  it('recusa uma imagem sem texto alternativo', () => {
    const { alt: _alt, ...imageWithoutAlt } = firstProduct.image

    expect(isProductsResponse({ products: [{ ...firstProduct, image: imageWithoutAlt }] })).toBe(
      false,
    )
  })

  it('recusa uma data de fim de oferta inválida', () => {
    const invalid = { ...campaign, offer: { ...campaign.offer, endsAt: 'amanhã' } }

    expect(isCampaignResponse(invalid)).toBe(false)
  })

  it('recusa uma forma de pagamento desconhecida', () => {
    const invalid = { ...footer, paymentMethods: ['visa', 'cheque'] }

    expect(isFooterResponse(invalid)).toBe(false)
  })
})
