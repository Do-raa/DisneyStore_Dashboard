import Navbar from "../components/Navbar"
import Card from "../components/Card"



const Store = ( props ) => {
    const navigation = [
        { name: 'Dashboard', href: '/profil/dashboard', current: false },
        { name: 'Products', href: '/profil/products', current: false },
        { name: 'Store', href: '/profil/store', current: true },
    ]

    return(
        <div>
            <Navbar navigation={navigation}/>
            {props.products.map(product => <Card key={product.id} product={product} />)}
        </div>
    )
} 

export default Store;