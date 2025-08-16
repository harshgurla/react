import { useUser } from "../Context/UserContext";


const Cart = () => {

    const { cart , dispatch } = useUser();

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity , 
        0
      );

      return (
        <>
        <section className="cart-section">
        <h1>Cart</h1>
        <ul className="cart-list">
          {cart.length > 0 ? (
            cart.map((item) => (
              <li key={item._id} className="cart-item">
              <h4>{item.title}</h4>

              <div className="cart-details">
              <p>{item.quantity} x {item.price.toFixed(2)}</p>

              <button
               onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", id: item._id })}
                >
                Remove
              </button>
              </div>
            </li>
          ))
          ) : (
              <div style={{ textAlign: "center", padding: "10px" }}>
                <p>Cart is empty</p>
              </div>
          )
        }
        </ul>
        <h1>Total: ${totalPrice.toFixed(2)}</h1>
        </section>
        </>
      )

}
export default Cart;