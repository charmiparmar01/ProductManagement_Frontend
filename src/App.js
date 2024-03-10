import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar'
import AddProduct from './component/AddProduct'
import EditProduct from './component/EditProduct';
import Home from './component/Home';
import Products from './component/Products';



const App = () => {
  return (
    <div>
    <Navbar/>
    <Router>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/Products' element={<Products />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/Products/editproduct/:id' element={<EditProduct/>}></Route>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App