import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useApi } from './useApi'

describe('useApi', () => {
  it('começa carregando e depois entrega os dados', async () => {
    const fetcher = () => Promise.resolve({ total: 3 })

    const { result } = renderHook(() => useApi(fetcher))

    expect(result.current).toEqual({ data: null, isLoading: true, error: null })
    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current).toEqual({ data: { total: 3 }, isLoading: false, error: null })
  })

  it('entrega o erro quando o serviço falha', async () => {
    const fetcher = () => Promise.reject(new Error('API fora do ar'))

    const { result } = renderHook(() => useApi(fetcher))

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.data).toBeNull()
    expect(result.current.error?.message).toBe('API fora do ar')
  })
})
