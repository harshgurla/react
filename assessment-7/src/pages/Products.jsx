import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/apiClient';
import { Link, Outlet } from 'react-router';
import './Products.css'; // Import the CSS file

export const fetchProduct = async () => {
  const response = await apiClient.get('/products');
  console.log(response.data);
  return await response.data;
};

const Products = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
  });

  if (isPending) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>
      <div className="products-grid">
        {data?.data.map((item) => (
          <div key={item._id} className="product-card">
            <img src={item.image} alt={item.title} className="product-image" />
            <h1 className="product-title">{item.title}</h1>
            <h3 className="product-price">Price: ${item.price}</h3>
            <p className="product-category">{item.category}</p>
            <Link to={`/products/details/${item._id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Products;