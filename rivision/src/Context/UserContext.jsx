import { createContext, useContext, useState, useReducer, useRef } from "react";
import cartReducer from "../components/Reducer"

const UserContext = createContext();



const  UserProvider = ({children}) => {

     const [isAuthentication, setIsAuthentication] = useState(false);
     const [cart, dispatch] = useReducer(cartReducer, []);
    const [searchedProduct, setSearchedProduct] = useState('');

     const inputRef = useRef(null);

     const value = {isAuthentication, setIsAuthentication, cart, dispatch, inputRef, searchedProduct, setSearchedProduct}

     return (
        <>
        <UserContext.Provider  value={value}>
            {children}
        </UserContext.Provider>
        </>
     )
}

const useUser = () => {
    return useContext(UserContext)
}

export { UserProvider, UserContext, useUser}
