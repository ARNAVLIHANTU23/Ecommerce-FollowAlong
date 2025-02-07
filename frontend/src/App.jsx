import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import { LoginPage, SignupPage, Home, CreateProduct, MyProducts} from "./Routes.jsx"

import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/my-products' element={<MyProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;