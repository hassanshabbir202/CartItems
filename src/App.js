import React from 'react'
import NavM from './navbar/NavM'
import {Routes,Route} from "react-router-dom"
import Home from './home/Home'
import AddProduct from './addProduct/AddProduct'
import Cart from './cart/Cart'
import SignUp from './signup/SignUp'
import Login from './login/Login'

const App = () => {
  return (
    <div>
      <NavM/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AddProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
