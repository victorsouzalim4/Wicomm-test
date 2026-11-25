import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

export type ButtonVariant = 'primary' | 'dark' | 'outline'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-black hover:brightness-95',
  dark: 'bg-black text-white hover:bg-black/80',
  outline: 'border border-primary text-black hover:bg-primary/10',
}

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
  fullWidth?: boolean
}

/** Botão de ação. Altura e tipografia do "COMPRAR" do Figma: 30px, Poppins 600, 14px, -4%. */
export function Button({
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex h-7.5 cursor-pointer items-center justify-center gap-1 px-2 text-sm font-semibold tracking-button uppercase transition',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    />
  )
}
