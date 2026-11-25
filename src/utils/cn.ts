/** Junta classes CSS ignorando valores vazios: cn('a', isActive && 'b') → 'a b' ou 'a'. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
