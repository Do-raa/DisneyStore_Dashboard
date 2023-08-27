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
      let file = product.file
      const reader = new FileReader();

      reader.onloadend = async() => {
      // Obtain the base64-encoded image data
      const base64ImageData = reader.result;

      // Use the base64ImageData in your API request or JSON data
      console.log(base64ImageData);
      product.file = {
        id: product.id,
        name: file.name,
        format: file.type,
        data: base64ImageData
        };
    
        await api.post("/products", product)        
      };

      // Read the file as a data URL (base64 encoding)
      reader.readAsDataURL(file);
      setProducts([...products, product])
      console.log(products)
    } 
    
    const editProduct = async (product) => {
      console.log("from edit" + product)
      const response = await api.put(`/products/${product.id}`, product) 
      const {id} = response.data 
      setProducts(products.map(product => product.id === id ? {...response.data}: product))
    }

    const deleteProduct = async (id) => {
      await api.delete(`/products/${id}`)
      const newProductsArr = products.filter(product => product.id !== id ) 
      setProducts(newProductsArr)
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
          <Route path="/profil/products" element={<Products products={products}  editProduct={editProduct}/>} />
          <Route path="/profil/store" element={<Store products={products} deleteProduct={deleteProduct}/>} />
          <Route path="/profil/add-product" element={<AddProduct addProducts={addProducts}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
