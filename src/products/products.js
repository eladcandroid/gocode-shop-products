import ProductCard from "../components/product-card";
import {useContext} from "react";
import {Category} from "../context/catrgory";

function Products({products}) {
    const {selectedCategory} = useContext(Category)
    return (
        <section className="products">
            {products.filter(product=>product.category === selectedCategory).map(product => <ProductCard {...{...product, key:product.id}} />)}
        </section>
    )
}

export default Products;
