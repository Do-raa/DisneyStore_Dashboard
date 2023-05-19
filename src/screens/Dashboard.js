import Navbar from "../components/Navbar"


const Dashboard = () => {
    const navigation = [
        { name: 'Dashboard', href: '/profil/dashboard', current: true },
        { name: 'Products', href: '/profil/products', current: false },
        { name: 'Store', href: '/profil/store', current: false },
      ]

    return(
        <div>
            <Navbar navigation={navigation}/>
            <h1>this is dashboard</h1>
        </div>
    )
} 

export default Dashboard;