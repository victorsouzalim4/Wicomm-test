/**
 * Hooks de dados usados pelas seções. Cada um liga um serviço ao useApi.
 * Os componentes reaproveitáveis (components/) não usam estes hooks: recebem tudo por props.
 */
import {
  getBanners,
  getBlog,
  getCampaign,
  getCauses,
  getFooter,
  getNavigation,
  getProducts,
  getShelves,
  getSocial,
} from '@/services/storeService'
import { useApi } from './useApi'

export const useProducts = () => useApi(getProducts)

export const useShelves = () => useApi(getShelves)

export const useBanners = () => useApi(getBanners)

export const useCampaign = () => useApi(getCampaign)

export const useBlog = () => useApi(getBlog)

export const useCauses = () => useApi(getCauses)

export const useSocial = () => useApi(getSocial)

export const useNavigation = () => useApi(getNavigation)

export const useFooter = () => useApi(getFooter)
