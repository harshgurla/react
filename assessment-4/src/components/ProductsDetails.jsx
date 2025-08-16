
import { useParams } from "react-router";

const ProductsDetails = () => {
    const { id } = useParams();

    const product = productsData.find((product) => product.id === parseInt(id))
    if(!product) {
        return <h1>Product not found</h1>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <h4>{product.price}</h4>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductsDetails;