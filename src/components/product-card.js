function ProductCard(props) {
    const {imgUrl, name, price} = props
    return (<div className="product-card">
        <div className="product-image">
            <img
                src={imgUrl}
            />
        </div>
        <div className="product-info">
            <h5>{name}</h5>
            <h6>${price}</h6>
        </div>
    </div>)
}


export default ProductCard;
