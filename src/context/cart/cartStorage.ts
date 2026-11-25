import type { CartLine } from './cartReducer'

/** Chave com versão: se o formato mudar, a versão muda e os dados antigos são ignorados. */
export const CART_STORAGE_KEY = 'wicomm-cart:v1'

const isCartLine = (value: unknown): value is CartLine =>
  typeof value === 'object' &&
  value !== null &&
  typeof (value as CartLine).productId === 'string' &&
  Number.isInteger((value as CartLine).quantity) &&
  (value as CartLine).quantity > 0

/**
 * Lê o carrinho salvo. Se o JSON estiver inválido ou o navegador bloquear o acesso
 * (modo privado, por exemplo), começa vazio em vez de quebrar a página.
 */
export function loadCartLines(): CartLine[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? '[]')
    return Array.isArray(saved) ? saved.filter(isCartLine) : []
  } catch {
    return []
  }
}

export function saveCartLines(lines: CartLine[]) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines))
  } catch {
    // Sem acesso ao localStorage: o carrinho funciona, só não sobrevive ao recarregar.
  }
}
