import Navbar from "../components/Navbar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect } from 'react';   
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a theme from PrimeReact
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';     

const Products = (props) => {
  const navigation = [
    { name: "Dashboard", href: "/profil/dashboard", current: false },
    { name: "Products", href: "/profil/products", current: true },
    { name: "Store", href: "/profil/store", current: false },
  ];
 const [products, setProducts] = useState();

 useEffect(() => {
  setProducts(props.products);
}, [props.products]);

 const imageBodyTemplate = (rowData) => {
  return <img src={rowData.file.data} alt={rowData.file.name} width="64px" className="shadow-4" />;
};

const onRowEditComplete = (e) => {
  let { newData } = e;
  let editedProductIndex = products.findIndex(product => product.id === newData.id);
  let updatedProducts = [...products];

  updatedProducts[editedProductIndex] = newData;
  setProducts(updatedProducts);
  props.editProduct(newData)
};

const textEditor = (options) => {
  return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
};

const priceEditor = (options) => {
  return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
};
  return (
    <div>
      <Navbar navigation={navigation} />

      <div className="card m-10">
            <DataTable value={products}  editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem', margin: "55px 0px 0px 0px" }}>
                <Column field="reference" header="Reference"  editor={(options) => textEditor(options)} style={{ width: '25%' }}></Column>
                <Column field="name" header="Name"  editor={(options) => textEditor(options)} style={{ width: '25%' }}></Column>
                <Column header="Image" body={imageBodyTemplate} />
                <Column field="price" header="Price" editor={(options) => priceEditor(options)}  style={{ width: '25%' }}></Column>
                <Column rowEditor headerStyle={{ width: '10%' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
       
    </div>
  );
};

export default Products;
