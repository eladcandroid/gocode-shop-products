function ProductCard(props) {
    const {image, title, price, id} = props
    return (<div className="product-card">
        <div className="product-image">
            <img
                src={image}
            />
        </div>
        <div className="product-info">
            <a href={`product/${id}`}><h5>{title}</h5></a>
            <h6>${price}</h6>
        </div>
    </div>)
}


export default ProductCard;
