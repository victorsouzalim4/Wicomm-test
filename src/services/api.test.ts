import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ApiError, clearApiCache, fetchJson, getJson } from './api'

const isGreeting = (data: unknown): data is { message: string } =>
  typeof data === 'object' &&
  data !== null &&
  typeof (data as { message?: unknown }).message === 'string'

const jsonResponse = (body: unknown, init?: ResponseInit) =>
  new Response(JSON.stringify(body), { status: 200, ...init })

describe('fetchJson', () => {
  const fetchMock = vi.fn<typeof fetch>()

  beforeEach(() => {
    vi.stubGlobal('fetch', fetchMock)
  })

  afterEach(() => {
    fetchMock.mockReset()
    vi.unstubAllGlobals()
  })

  it('busca o endpoint na base /api e devolve os dados validados', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ message: 'olá' }))

    await expect(fetchJson('greeting.json', isGreeting)).resolves.toEqual({ message: 'olá' })
    expect(fetchMock).toHaveBeenCalledWith('/api/greeting.json')
  })

  it('lança ApiError com o status quando a resposta não é ok', async () => {
    fetchMock.mockResolvedValue(new Response('não encontrado', { status: 404 }))

    const error = await fetchJson('missing.json', isGreeting).catch((e: unknown) => e)

    expect(error).toBeInstanceOf(ApiError)
    expect(error).toMatchObject({ status: 404 })
  })

  it('lança ApiError quando a resposta não é JSON', async () => {
    fetchMock.mockResolvedValue(new Response('<html>', { status: 200 }))

    await expect(fetchJson('broken.json', isGreeting)).rejects.toThrow(/não é um JSON válido/)
  })

  it('lança ApiError quando o formato não passa na validação', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ message: 42 }))

    await expect(fetchJson('greeting.json', isGreeting)).rejects.toThrow(/Formato inesperado/)
  })

  it('lança ApiError quando a rede falha', async () => {
    fetchMock.mockRejectedValue(new TypeError('Failed to fetch'))

    await expect(fetchJson('greeting.json', isGreeting)).rejects.toThrow(
      /Não foi possível conectar/,
    )
  })
})

describe('getJson', () => {
  const fetchMock = vi.fn<typeof fetch>()

  beforeEach(() => {
    clearApiCache()
    vi.stubGlobal('fetch', fetchMock)
  })

  afterEach(() => {
    fetchMock.mockReset()
    vi.unstubAllGlobals()
  })

  it('reaproveita a mesma requisição quando o endpoint é pedido mais de uma vez', async () => {
    fetchMock.mockImplementation(async () => jsonResponse({ message: 'olá' }))

    await Promise.all([getJson('greeting.json', isGreeting), getJson('greeting.json', isGreeting)])

    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('tenta de novo depois de uma falha', async () => {
    fetchMock
      .mockResolvedValueOnce(new Response('erro', { status: 500 }))
      .mockResolvedValueOnce(jsonResponse({ message: 'olá' }))

    await expect(getJson('greeting.json', isGreeting)).rejects.toThrow(/Erro 500/)
    await expect(getJson('greeting.json', isGreeting)).resolves.toEqual({ message: 'olá' })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })
})
