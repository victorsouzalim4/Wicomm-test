import { ProductShelf } from '@/sections/ProductShelf/ProductShelf'

function App() {
  return (
    <main>
      <h1 className="sr-only">Amakha Paris: perfumes, cosméticos e bem-estar</h1>
      <ProductShelf shelfId="favorites" />
      <ProductShelf shelfId="perfumes" />
      <ProductShelf shelfId="beauty-routine" />
    </main>
  )
}

export default App
