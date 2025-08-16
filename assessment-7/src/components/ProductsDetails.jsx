import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { fetchProduct } from '../pages/Products';


const ProductsDetails = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: () =>  fetchProduct(id)
    });

    if (isLoading) return <h2>Loading...</h2>;
    if (error) return <h2>Error loading product</h2>;
    if (!data) return <h2>Product not found</h2>;

    const product = data;

  return (
         <div key={product._id}>
             <h1>{product.title}</h1>
             <img src={product.image} alt={product.title} />
             <h4>{product.price}</h4>
             <p>{product.category}</p>
             <p>{product.description}</p>
        </div>
  )
}

export default ProductsDetails