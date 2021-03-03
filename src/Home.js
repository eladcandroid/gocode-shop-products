import './App.css';
import NavBar from "./nav-bar/nav-bar";
import Products from "./products/products";
import {useEffect, useState} from "react";
import {Category} from './context/catrgory'
function Home() {
    const [products,setProducts] = useState([])
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(items => {
                setProducts(items);
                const groupBy = (xs, key) => xs.reduce((rv, x) => {
                    (rv[x[key]] = true || []);
                    return rv;
                }, {});

                const categories = Object.keys(groupBy(items, 'category'));
                setCategories(categories)
            })
    },[])
    return (
        <div>
            <Category.Provider value={{selectedCategory, setSelectedCategory}}>
                <NavBar categories={categories}></NavBar>
                <Products products={products}></Products>
            </Category.Provider>
        </div>
    );
}

export default Home;
