import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductForm from './pages/ProductFormPage'
import ProductPage from './pages/ProductPage'


function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage/>}/>
     <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>

      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/product/new" element={<ProductForm/>}/>      
      <Route path="/product/1/edit" element={<ProductForm/>}/>       

    </Routes>
  )
}

export default App