import { Navigate, Outlet } from 'react-router';
import { useUser } from '../context/UserContext';

export const ProtectedRoute = () => {

    const { isAuthenticated } = useUser();

    if( !isAuthenticated ) {
        return <Navigate to="/login" />;
    }
    return <Outlet />
  
};
