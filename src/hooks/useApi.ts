import { useEffect, useState } from 'react'

export interface ApiState<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
}

/**
 * Executa uma função de serviço e expõe { data, isLoading, error } para a interface.
 * O `fetcher` precisa ser estável (definido fora do componente), como os de storeService.
 */
export function useApi<T>(fetcher: () => Promise<T>): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>({ data: null, isLoading: true, error: null })

  useEffect(() => {
    // Evita atualizar o estado de um componente que já saiu da tela.
    let isActive = true

    fetcher()
      .then((data) => {
        if (isActive) setState({ data, isLoading: false, error: null })
      })
      .catch((error: unknown) => {
        if (isActive) {
          setState({
            data: null,
            isLoading: false,
            error: error instanceof Error ? error : new Error(String(error)),
          })
        }
      })

    return () => {
      isActive = false
    }
  }, [fetcher])

  return state
}
