import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

/** Largura máxima do conteúdo do Figma (1168px), com respiro lateral nas telas menores. */
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-content px-4 xl:px-0', className)} {...props} />
}
