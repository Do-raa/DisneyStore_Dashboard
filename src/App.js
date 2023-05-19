import SignIn from "./screens/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import "./App.css";
import Profil from "./screens/Profil";
import Dashboard from "./screens/Dashboard"
import Products from "./screens/Products";
import Store from "./screens/Store";
import AddProduct from "./screens/AddProduct";
import api from "./api/products"


function App() {
  const [products, setProducts] = useState([])

    const retrieveProducts = async () => {
        const response = await api.get("/products")
        return response.data
    }

    const addProducts = async (product) => {
      await api.post("/products", product)
      setProducts([...products, product])
    } 
    
    useEffect(() => {
        const getAllProducts = async () => {
            const products = await retrieveProducts()
            if( products.length !== 0) return setProducts(products)
        } 
        getAllProducts()
    }, []) 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/profil/dashboard" element={<Dashboard />} />
          <Route path="/profil/products" element={<Products />} />
          <Route path="/profil/store" element={<Store products={products}/>} />
          <Route path="/profil/add-product" element={<AddProduct addProducts={addProducts}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
