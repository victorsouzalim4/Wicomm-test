import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

interface SectionTitleProps extends ComponentProps<'h2'> {
  as?: 'h2' | 'h3'
}

/** Título das seções: Poppins 600, 20px, centralizado (Figma). */
export function SectionTitle({ as: Heading = 'h2', className, ...props }: SectionTitleProps) {
  return <Heading className={cn('text-center text-xl font-semibold', className)} {...props} />
}
