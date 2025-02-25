<<<<<<< HEAD
// import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct, MyProducts, Cart, ProductDetails, Profile, CreateAddress} from "./Routes";
import "./App.css";


=======
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct, MyProducts, Cart, ProductDetails, Profile} from "./Routes";
import "./App.css";

>>>>>>> 5d43ec0be4a0bade14628e22b59065f6de8e3c7e
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
<<<<<<< HEAD
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/create-address' element={<CreateAddress />} />
=======
        <Route path="/create-product/:id" element={<CreateProduct />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
>>>>>>> 5d43ec0be4a0bade14628e22b59065f6de8e3c7e
      </Routes>
    </BrowserRouter>
  )
}

export default App