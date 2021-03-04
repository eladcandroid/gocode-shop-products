import ProductCard from "../components/product-card";
import {useContext} from "react";
import {Category} from "../context/catrgory";

function Products({products, minimumPrice, maximumPrice}) {
    const {selectedCategory} = useContext(Category)
    return (
        <section className="products">
            {products.filter(product=> !selectedCategory || (product.category === selectedCategory))
                .filter(({price}) => price >= minimumPrice && price <= maximumPrice)
                .map(product => <ProductCard {...{...product, key:product.id}} />)}
        </section>
    )
}

export default Products;
