import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useEffect, useRef, useState } from "react";

const Store = (props) => {
  const navigation = [
    { name: "Dashboard", href: "/profil/dashboard", current: false },
    { name: "Products", href: "/profil/products", current: false },
    { name: "Store", href: "/profil/store", current: true },
  ];

  const myInput = useRef();
  const [myProducts, setMyProducts] = useState(props.products);

  useEffect(() => {
    setMyProducts(props.products);
  }, [props.products]);

  useEffect(() => {
    const handleInputChange = (e) => {
      const inputValue = e.target.value.toLowerCase();
      const filteredProducts = props.products.filter((product) =>
        product.name.toLowerCase().includes(inputValue)
      );
      setMyProducts(filteredProducts);
    };

    myInput.current.addEventListener("input", handleInputChange);

    return () => {
      myInput.current.removeEventListener("input", handleInputChange);
    };
  }, [props.products]);

  return (
    <div>
      <Navbar navigation={navigation} />
      <div className="bg-gray-100">
        <div className="flex items-center justify-center">
          <input
            placeholder="Search ..."
            ref={myInput}
            className="mb-20 mt-20 w-6/12 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-2 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-400 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex items-center justify-center flex-wrap">
          {myProducts.map((product) => (
            <Card key={product.id} product={product} getProductId={props.deleteProduct}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
