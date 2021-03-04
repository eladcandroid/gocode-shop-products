import NavBar from "./nav-bar/nav-bar";
import Products from "./products/products";
import {useEffect, useState} from "react";
import {Category} from './context/catrgory'
function Home() {
    const [products,setProducts] = useState([])
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [minimumPrice,setMinimumPrice] = useState(null);
    const [maximumPrice,setMaximumPrice] = useState(null);
    const [selectedMinimumPrice, setSelectedMinimumPrice] = useState(null);
    const [selectedMaximumPrice, setSelectedMaximumPrice] = useState(null);

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
                setMinimumPrice(Math.floor(Math.min(...items.map(product=>product.price))))
                setMaximumPrice(Math.ceil(Math.max(...items.map(product=>product.price))))
                setSelectedMinimumPrice(Math.floor(Math.min(...items.map(product=>product.price))))
                setSelectedMaximumPrice(Math.ceil(Math.max(...items.map(product=>product.price))))
            })
    },[])

    useEffect(() => {
        setMinimumPrice(Math.floor(Math.min(...products.filter(product=>product.category === selectedCategory).map(product=>product.price))))
        setMaximumPrice(Math.ceil(Math.max(...products.filter(product=>product.category === selectedCategory).map(product=>product.price))))
        setSelectedMinimumPrice(Math.floor(Math.min(...products.filter(product=>product.category === selectedCategory).map(product=>product.price))))
        setSelectedMaximumPrice(Math.ceil(Math.max(...products.filter(product=>product.category === selectedCategory).map(product=>product.price))))
    },[selectedCategory])
    return (
        <div>
            <Category.Provider value={{selectedCategory, setSelectedCategory, setSelectedMinimumPrice, setSelectedMaximumPrice}}>
                <NavBar categories={categories} minimumPrice={minimumPrice} maximumPrice={maximumPrice} selectedMaximumPrice={selectedMaximumPrice} selectedMinimumPrice={selectedMinimumPrice}></NavBar>
                <Products products={products} minimumPrice={selectedMinimumPrice} maximumPrice={selectedMaximumPrice}></Products>
            </Category.Provider>
        </div>
    );
}

export default Home;
