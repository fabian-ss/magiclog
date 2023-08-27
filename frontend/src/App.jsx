import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import ProductForm from './components/products/ProductForm'
import ProductPage from './pages/ProductPage'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/productform" element={<ProductForm/>}/>      
      <Route path="*" element={<NotFound/>}/>       
    </Routes>
  )
}

export default App