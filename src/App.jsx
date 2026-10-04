import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import ProductDetail from './pages/ProductDetail'

import ScrollToTopButton from './component/ui/ScrollToTopButton'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <ScrollToTopButton />
    </>
  )
}

export default App
