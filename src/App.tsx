import { CartProvider } from '@/context/cart/CartProvider'
import { useCart } from '@/hooks/useCart'
import { AnnouncementBar } from '@/layout/AnnouncementBar/AnnouncementBar'
import { Footer } from '@/layout/Footer/Footer'
import { Header } from '@/layout/Header/Header'
import { MiniCart } from '@/layout/MiniCart/MiniCart'
import { WhatsAppButton } from '@/layout/WhatsAppButton/WhatsAppButton'
import {
  CategoryBanners,
  PromoBannerGrid,
  ResellerBanners,
} from '@/sections/BannerSections/BannerSections'
import { BenefitsBar } from '@/sections/BenefitsBar/BenefitsBar'
import { BlogSection } from '@/sections/BlogSection/BlogSection'
import { CausesSection } from '@/sections/CausesSection/CausesSection'
import { HeroBanner } from '@/sections/HeroBanner/HeroBanner'
import { OfferCountdown } from '@/sections/OfferCountdown/OfferCountdown'
import { ProductShelf } from '@/sections/ProductShelf/ProductShelf'
import { SocialSection } from '@/sections/SocialSection/SocialSection'

/** A página, na ordem do Figma (ADR-0009). */
function HomePage() {
  const { addItem } = useCart()
  const addToCart = ({ id }: { id: string }) => addItem(id)

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 bg-primary px-4 py-2 font-medium focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Pular para o conteúdo
      </a>
      <AnnouncementBar />
      <Header />
      <main id="conteudo">
        <h1 className="sr-only">Amakha Paris: perfumes, cosméticos e bem-estar</h1>
        <HeroBanner />
        <OfferCountdown />
        <BenefitsBar />
        <ProductShelf shelfId="favorites" onAddToCart={addToCart} />
        <PromoBannerGrid />
        <ProductShelf shelfId="perfumes" onAddToCart={addToCart} />
        <CategoryBanners />
        <ProductShelf shelfId="beauty-routine" onAddToCart={addToCart} />
        <ResellerBanners />
        <BlogSection />
        <CausesSection />
        <SocialSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MiniCart />
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  )
}

export default App
