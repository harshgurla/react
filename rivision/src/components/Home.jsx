import { useUser } from "../Context/UserContext";
import Cart from "./Cart";
import Products from "./Products";
import { useState  } from "react";
import "./App.css"

const HomePage = () => {


  const {inputRef, setSearchedProduct, searchedProduct} = useUser()

  const [activePage, setActivePage] = useState(false)
  
  return (
    <>
    <header>
      <h1> shop </h1>
      <input
       type="text" 
       placeholder="search products" 
       ref={ inputRef }
       value={searchedProduct}
       onChange={(e)=> setSearchedProduct(e.target.value)}
       />
    </header>

    <div className="main-container">
      <nav>
        <button className="btn" onClick={ () => setActivePage(false)   }>Products</button>
        <button  className="btn" onClick={ () => setActivePage(true)}>Cart</button>

      {
        activePage ? <Cart /> : <Products />
      }
      </nav>
      

      
    </div>
    
    </>
  )


}

export default HomePage;