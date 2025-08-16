import { useUser } from "../Context/UserContext";
import { useEffect, useReducer, useState, useRef } from "react";

const Products = () => {

    

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { dispatch , inputRef, searchedProduct} = useUser()

  

  useEffect(() => {
    fetch("https://backendapi-cwp7.onrender.com/api/products")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setProducts(data.data);
          setLoading(false)
          setTimeout(()=> {
            if(inputRef.current) {
              inputRef.current.focus()
            }
          }, 0)
        });
      
  },[])



  if(loading) {
    return <h2>loading.....</h2>
  }

  console.log(products);

  const filteredProducts =  products.filter(product => 
    product.title.toLowerCase().includes((searchedProduct || "").toLowerCase())
  );

    
  const productCard = filteredProducts.map((item) => (
    <div key={item._id} className="product-card">
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <p>${item.price}</p>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", product: item })}>
        Add to cart
      </button>
    </div>
  ))

  return (
    <>
    <section className="products-section">
        <h1>Products</h1>
        <div className="products-grid">
          {productCard}
        </div>
      </section>
    </>
  )

}
export default Products;