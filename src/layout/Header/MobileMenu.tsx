import { Drawer } from '@/components/Drawer/Drawer'
import { Icon } from '@/components/Icon/Icon'
import type { NavItem } from '@/types/api'
import { cn } from '@/utils/cn'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  items: NavItem[]
}

/**
 * Menu do celular e do tablet (não está no Figma). Painel à esquerda com as mesmas categorias;
 * as subcategorias abrem com <details>/<summary>, que já é acessível sem JavaScript.
 */
export function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  return (
    <Drawer open={open} onClose={onClose} title="Menu" side="left">
      <nav aria-label="Menu principal">
        <ul className="flex flex-col divide-y divide-surface-200">
          {items.map((item) => (
            <li key={item.href}>
              {item.children?.length ? (
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-medium uppercase [&::-webkit-details-marker]:hidden">
                    {item.label}
                    <Icon
                      name="chevron-down"
                      className="h-1.5 w-2.75 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <ul className="flex flex-col pb-3">
                    {[
                      { label: `Ver tudo em ${item.label}`, href: item.href },
                      ...item.children,
                    ].map((child) => (
                      <li key={child.href}>
                        <a href={child.href} className="block px-8 py-2.5 text-sm">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 px-5 py-4 text-sm font-medium uppercase',
                    item.variant === 'promo' && 'text-primary',
                  )}
                >
                  {item.variant === 'promo' && <Icon name="discount-shape" className="size-5.5" />}
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </Drawer>
  )
}
