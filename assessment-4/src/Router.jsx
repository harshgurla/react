import { createBrowserRouter } from 'react-router'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import { getProducts } from './Api/productsAPI';
import { ProtectedRoute } from './components/ProtectedRoute';
import ProductsDetails from './components/ProductsDetails';

export const router = createBrowserRouter([
     {
         path: "/login",
         element: <Login  />,          
     },
     {
        path: "/",
        element: <ProtectedRoute >
                     <Home />
                 </ProtectedRoute>,
        children: [
            {
                path: "products",
                element: <Products />,
                loader: getProducts ,
            },
            {
                path: "details",
                element: <ProductsDetails />
            }
        ]

    },
    
    
]);