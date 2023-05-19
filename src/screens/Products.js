import Navbar from "../components/Navbar";

const Products = () => {
  const navigation = [
    { name: "Dashboard", href: "/profil/dashboard", current: false },
    { name: "Products", href: "/profil/products", current: true },
    { name: "Store", href: "/profil/store", current: false },
  ];

  return (
    <div>
      <Navbar navigation={navigation} />
     
    </div>
  );
};

export default Products;
