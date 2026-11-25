import { useEffect, useId, useRef, useState } from 'react'
import { Icon, type IconName } from '@/components/Icon/Icon'
import type { NavItem as NavItemData } from '@/types/api'
import { cn } from '@/utils/cn'

/** Ícone de cada variante especial do menu (Figma: "Revenda" com pessoas, "Promoções" com selo). */
const variantIcon: Record<NonNullable<NavItemData['variant']>, IconName> = {
  reseller: 'people',
  promo: 'discount-shape',
}

const itemClasses = {
  default: 'bg-neutral-50 hover:bg-surface-50',
  reseller: 'border border-primary bg-neutral-50 hover:bg-primary/10',
  promo: 'text-primary hover:underline',
}

/**
 * Item do menu principal (Figma: 36px de altura, padding 8×18, cantos de 4px, 14px peso 500).
 * Itens com subcategorias abrem um dropdown: no hover (mouse) e no clique/Enter (teclado e toque).
 * Esc e clique fora fecham.
 */
export function NavItem({ item }: { item: NavItemData }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLLIElement>(null)
  const menuId = useId()
  const icon = item.variant ? variantIcon[item.variant] : undefined
  const classes = cn(
    'flex h-9 cursor-pointer items-center gap-2 rounded px-4.5 text-sm font-medium uppercase transition-colors',
    itemClasses[item.variant ?? 'default'],
  )

  useEffect(() => {
    if (!isOpen) return

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  const content = (
    <>
      {icon && <Icon name={icon} className="size-5.5" />}
      {item.label}
    </>
  )

  if (!item.children?.length) {
    return (
      <li>
        <a href={item.href} className={classes}>
          {content}
        </a>
      </li>
    )
  }

  return (
    <li ref={containerRef} className="group/nav relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
        className={classes}
      >
        {content}
        <Icon
          name="chevron-down"
          className={cn(
            'h-1.5 w-2.75 text-neutral-500 transition-transform group-hover/nav:rotate-180',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {/*
        No mouse, o hover abre pelo CSS (group-hover). No teclado e no toque, o clique alterna isOpen.
        pt-1 cria uma "ponte" para o mouse chegar ao dropdown sem fechá-lo.
      */}
      <div
        id={menuId}
        className={cn(
          'invisible absolute top-full left-0 z-30 pt-1 opacity-0 transition-opacity group-hover/nav:visible group-hover/nav:opacity-100',
          isOpen && 'visible opacity-100',
        )}
      >
        <ul className="flex min-w-43 flex-col gap-1 rounded bg-white p-2.5 shadow-dropdown">
          <li>
            <a
              href={item.href}
              className="block rounded px-2 py-1.5 text-sm font-medium whitespace-nowrap hover:bg-surface-50"
            >
              Ver tudo em {item.label}
            </a>
          </li>
          {item.children.map((child) => (
            <li key={child.href}>
              <a
                href={child.href}
                className="block rounded px-2 py-1.5 text-sm whitespace-nowrap hover:bg-surface-50"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
