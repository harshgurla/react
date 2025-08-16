import { Routes, Route, Link, Outlet } from "react-router";
import Products from "./components/Products";
import Cart from "./components/Cart";

const NavBar = () => {
  return (
    <div>
      <h2>Shop</h2>
      <nav>
        <ul>
          <li><Link to="/Products">Products </Link></li>
          <li><Link to="/Cart">Cart</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>} >
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
export default App;
