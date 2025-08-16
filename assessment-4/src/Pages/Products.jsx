import { useLoaderData, Link, useNavigation} from 'react-router';

const Products = () => {

    const products = useLoaderData();
       console.log(products)
    const navigation = useNavigation();

    if (navigation.state === "loading") {
         return <h4>Loading... </h4>
        }

  return (
    <div>
        <h1>Products</h1>
      <div>
        {
            products.map((item)=> {

      <div key={item_id} className="product-card">
        <h1>{item.title}</h1>
        <img src={item.image} alt={item.title} />
        <p>${item.price}</p>
        <Link to={`/Products/details/${item._id}`}>View details</Link>
      </div>
            })
        }
      </div>

    </div>
  )
}

export default Products