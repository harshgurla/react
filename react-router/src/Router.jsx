import { createBrowserRouter } from 'react-router'
import Login from './pages/Login';
import  { LoginAction, RegisterAction } from './Api/authAPI';
import Register from './pages/Register';
import Protected from './components/Protected';
import Home from './pages/Home';

 export const router = createBrowserRouter([
    {
        index: true,
        element: <Protected >
                     <Home />
                 </Protected>
    },
    {
        path: '/login',
        Component: Login,
        action: LoginAction,
    },
    {
        path:'/register',
        Component: Register,
        action: RegisterAction,
    }
]);