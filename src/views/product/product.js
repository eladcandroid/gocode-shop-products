import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(json => setProduct(json))
    }, [])

    return (
        <>
            {Object.keys(product || {}).map(key => {
                if(key === 'image')
                    return (<img src={product[key]}/>)
                return (<div>{key}: {product[key]}</div>)
            })}
        </>
    )
}

export default Product
