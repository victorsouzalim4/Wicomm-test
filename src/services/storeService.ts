/**
 * Um serviço por recurso da API. É o único lugar que conhece os endpoints:
 * trocar o mock por um backend real é mudar o VITE_API_URL (ou estes caminhos).
 */
import { getJson } from './api'
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

export const getProducts = () => getJson('products.json', isProductsResponse)

export const getShelves = () => getJson('shelves.json', isShelvesResponse)

export const getBanners = () => getJson('banners.json', isBannersResponse)

export const getCampaign = () => getJson('campaign.json', isCampaignResponse)

export const getBlog = () => getJson('blog.json', isBlogResponse)

export const getCauses = () => getJson('causes.json', isCausesResponse)

export const getSocial = () => getJson('social.json', isSocialResponse)

export const getNavigation = () => getJson('navigation.json', isNavigationResponse)

export const getFooter = () => getJson('footer.json', isFooterResponse)
