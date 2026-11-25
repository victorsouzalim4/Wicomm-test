/**
 * Cliente HTTP da API (mock em public/api/*.json). Ver ADR-0010.
 * Nenhum componente usa fetch direto: tudo passa por aqui.
 */

const API_URL = import.meta.env.VITE_API_URL ?? '/api'

/** Atraso artificial só em desenvolvimento, para o estado de carregamento aparecer como numa API real. */
const MOCK_DELAY_MS = import.meta.env.MODE === 'development' ? 300 : 0

export type Validator<T> = (data: unknown) => data is T

export class ApiError extends Error {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export async function fetchJson<T>(path: string, validate: Validator<T>): Promise<T> {
  if (MOCK_DELAY_MS > 0) await wait(MOCK_DELAY_MS)

  let response: Response
  try {
    response = await fetch(`${API_URL}/${path}`)
  } catch {
    throw new ApiError(`Não foi possível conectar à API (${path})`)
  }

  if (!response.ok) {
    throw new ApiError(`Erro ${response.status} ao buscar ${path}`, response.status)
  }

  let data: unknown
  try {
    data = await response.json()
  } catch {
    throw new ApiError(`A resposta de ${path} não é um JSON válido`)
  }

  if (!validate(data)) {
    throw new ApiError(`Formato inesperado na resposta de ${path}`)
  }

  return data
}

/**
 * Guarda a requisição de cada endpoint: várias seções podem pedir os mesmos dados
 * (as 3 vitrines usam products.json) e a rede só é chamada uma vez.
 * Se a requisição falhar, ela sai do cache para poder ser tentada de novo.
 */
const cache = new Map<string, Promise<unknown>>()

export function getJson<T>(path: string, validate: Validator<T>): Promise<T> {
  const cached = cache.get(path) as Promise<T> | undefined
  if (cached) return cached

  const request = fetchJson(path, validate).catch((error: unknown) => {
    cache.delete(path)
    throw error
  })
  cache.set(path, request)
  return request
}

/** Usado nos testes para começar cada caso sem dados guardados. */
export function clearApiCache() {
  cache.clear()
}
