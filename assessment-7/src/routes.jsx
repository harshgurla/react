import ProductsDetails from './components/ProductsDetails';
import Products from './pages/Products';


export const routes = [
  {
    path: '/',
    element: <Products />,
    children: [
        {
            path: '/products/details/:id',
            element: <ProductsDetails />
        }
    ]
  }
 
];
