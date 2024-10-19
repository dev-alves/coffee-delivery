import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
