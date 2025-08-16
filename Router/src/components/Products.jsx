import productsData from "../ProductsData";

const Products = () => {

    return (
        <>
        <h3>Products</h3>
        {
            productsData.map((item) => (
                <div key={item.id}>

                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <button>Add to Cart</button>
                </div>
                ))
             }
        </>
    )
}

export default Products;