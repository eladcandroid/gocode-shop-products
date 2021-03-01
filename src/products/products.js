import ProductCard from "../components/product-card";

function Products() {
    const products = [
        {
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: "99.99",
            id: 1
        },
        {
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: "99.99",
            id: 2
        },
        {
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: "99.99",
            id: 3
        }
    ]

    return (
        <>
            {products.map(product => <ProductCard {...product} />)}
        </>
    )
}

export default Products;
