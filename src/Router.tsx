import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Sucsess } from './pages/Sucsess'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucsess" element={<Sucsess />} />
      </Route>
    </Routes>
  )
}
