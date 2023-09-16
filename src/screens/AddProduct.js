import backIcon from "../assets/back-icon.png";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



const AddProduct = ( props ) => { 
    const [errors, setErrors] = useState({});
    const [product, setProduct] = useState({ id: Math.random(), reference: "", name: "", file: {}, description: "", price: ""})
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/profil/dashboard");
    };

    const validateProduct = () => {
    
      if (!product.reference) {
        errors.reference = "Reference is required.";
      } else if (!/^[A-Z0-9]+$/.test(product.reference)) {
        errors.reference = "Reference must contain only capital letters and numbers.";
      }
    
      if (!product.name) {
        errors.name = "Name is required.";
      }
      
      if (product.file.length === 0) {
        errors.file = "File is required.";
      }
    
      if (!product.description) {
        errors.description = "Description is required.";
      }
    
      if (!product.price) {
        errors.price = "Price is required.";
      } else if (isNaN(product.price) || parseFloat(product.price) <= 0) {
        errors.price = "Price must be a valid positive number.";
      }
    
      return errors;
    };    

    const addProduct = (e) => {
      e.preventDefault();
      const validationErrors = validateProduct();
      if (Object.values(validationErrors).every(el => el.length === 0)) {
        props.addProducts(product);
        navigate("/profil/store");
      } else {
        setErrors({...validationErrors}); // Update the state to display the errors
      }
    };
    

    const handleFileInputChange = (e) => {
      e.preventDefault()
      console.log(e.target.files[0])
      const file = e.target.files[0]
      setProduct({...product, file:file})
      setErrors({ ...errors, file: "" })
  }
  return (
    <div className="bg-slate-50 px-20 pt-20 h-screen w-screen">
        <div >
        <img src={backIcon} alt="back-icon" height={30} width={30} className="hover:opacity-60 cursor-pointer" onClick={handleClick}/>
        </div>
      <h1 className="font-bold text-lg tracking-wide text-pink-400 pb-10 text-center">
        ADD PRODUCT
      </h1>

      <label
        htmlFor="name"
        className="block text-sm text-left font-medium leading-6 text-gray-900 mt-2"
      >
        Reference
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="reference"
          id="reference"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="e.g : DN701"
          value={product.reference}
          onChange={(e) => setProduct({...product, reference: e.target.value}) & setErrors({ ...errors, reference: "" })}
        />
         {errors.reference && <span className="error text-rose-600">{errors.reference}</span>}
      </div>

      <label
        htmlFor="name"
        className="block text-sm text-left font-medium leading-6 text-gray-900 mt-2"
      >
        Name
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="e.g : T-shirt" 
          value={product.name}
          onChange={(e) => setProduct({...product, name: e.target.value}) & setErrors({ ...errors, name: "" })}
        />
        {errors.name && <span className="error text-rose-600">{errors.name}</span>}
      </div>

      <label
        htmlFor="name"
        className="block text-sm text-left font-medium leading-6 text-gray-900 mt-2"
      >
        Photo
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="file"
          name="photo"
          id="photo"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="e.g : T-shirt"
          //value={product.imgFile.name}
          onChange={handleFileInputChange} 
        />
        {errors.file && <span className="error text-rose-600">{errors.file}</span>}
      </div>

      <label
        htmlFor="name"
        className="block text-sm text-left font-medium leading-6 text-gray-900 mt-2"
      >
        Description
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <textarea
          rows={4}
          cols={50}
          type="textarea"
          name="description"
          id="description"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="e.g : This T-shirt was made with coton ..."
          value={product.description}
          onChange={(e) => setProduct({...product, description: e.target.value}) & setErrors({ ...errors, description: "" })}
        />
        {errors.description && <span className="error text-rose-600">{errors.description}</span>}
      </div>
      <label
        htmlFor="price"
        className="block text-sm text-left font-medium leading-6 text-gray-900 mt-2"
      >
        Price
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 text-sm">$</span>
        </div>
        <input
          type="number"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          value={product.price}
          onChange={(e) => setProduct({...product, price: e.target.value}) & setErrors({ ...errors, price: "" })}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
       
      </div>
       {errors.price && <span className="error text-rose-600">{errors.price}</span>}
      <div className="text-center">
        <button onClick={addProduct} className="text-md font-medium leading-6 text-gray-900 rounded border-2 bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-60 py-2 px-4 mt-3">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
