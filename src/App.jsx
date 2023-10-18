import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import AttendencePage from './pages/AttendencePage'
import LikePage from './pages/LikePage'
import OrderPage from './pages/OrderPage'
import PointPage from './pages/PointPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='login' element={<SigninPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='product/:id' element={<ProductsPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='attendence' element={<AttendencePage />} />
          <Route path='like' element={<LikePage />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='point' element={<PointPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
