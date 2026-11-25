import type { ComponentProps } from 'react'
import { Icon, type IconName } from '@/components/Icon/Icon'
import { cn } from '@/utils/cn'

interface IconButtonProps extends Omit<ComponentProps<'button'>, 'children'> {
  icon: IconName
  /** Obrigatório: um botão só com ícone precisa de um nome para leitores de tela. */
  label: string
  iconClassName?: string
}

export function IconButton({
  icon,
  label,
  iconClassName,
  type = 'button',
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn('inline-flex cursor-pointer items-center justify-center', className)}
      {...props}
    >
      <Icon name={icon} className={cn('size-5.5', iconClassName)} />
    </button>
  )
}
