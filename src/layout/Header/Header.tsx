import { useState } from 'react'
import logoUrl from '@/assets/brand/logo-amakha.svg'
import { Container } from '@/components/Container/Container'
import { Icon } from '@/components/Icon/Icon'
import { IconButton } from '@/components/IconButton/IconButton'
import { useNavigation } from '@/hooks/useStoreData'
import { CartButton } from './CartButton'
import { MobileMenu } from './MobileMenu'
import { NavItem } from './NavItem'
import { SearchForm } from './SearchForm'

/**
 * Header (Figma: 139px, fundo branco, sombra 0 1px 2px).
 * Desktop: logo, busca, conta, favoritos e carrinho, com o menu de categorias embaixo.
 * Celular e tablet: botão de menu, logo e carrinho, com a busca embaixo; categorias no MobileMenu.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: navigation } = useNavigation()
  const items = navigation?.items ?? []

  return (
    <header className="sticky top-0 z-40 bg-white shadow-header">
      <Container className="flex flex-col gap-3 py-3 lg:gap-4 lg:pt-3 lg:pb-3.5">
        <div className="flex items-center gap-4 lg:gap-6">
          <IconButton
            icon="menu"
            label="Abrir menu"
            aria-haspopup="dialog"
            onClick={() => setIsMenuOpen(true)}
            className="size-10 lg:hidden"
            iconClassName="size-6"
          />

          <a href="/" className="shrink-0" aria-label="Amakha Paris: página inicial">
            <img src={logoUrl} alt="" width={108} height={54} className="h-10 w-auto lg:h-13.5" />
          </a>

          <SearchForm className="hidden flex-1 lg:flex lg:max-w-175.75" />

          <div className="ml-auto flex items-center gap-2 lg:gap-3">
            <a
              href="/minha-conta"
              className="hidden h-13 items-center gap-2 rounded-field bg-primary px-4 text-xs transition hover:brightness-95 md:flex"
            >
              <Icon name="profile-circle" className="size-5.5" />
              <span className="flex flex-col">
                <span className="uppercase">Minha conta</span>
                <span>Entre ou cadastre-se</span>
              </span>
            </a>
            <a
              href="/favoritos"
              aria-label="Favoritos"
              className="hidden size-10 items-center justify-center sm:flex"
            >
              <Icon name="heart" className="size-5.5" />
            </a>
            <CartButton />
          </div>
        </div>

        <SearchForm className="lg:hidden" />

        {items.length > 0 && (
          <nav aria-label="Categorias" className="hidden lg:block">
            <ul className="flex items-center justify-between">
              {items.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </ul>
          </nav>
        )}
      </Container>

      <MobileMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} items={items} />
    </header>
  )
}
