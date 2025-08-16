import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const  UserProvider = ({children}) => {

    const [isAuthentication, setIsAuthentication] = useState(false);
    const [searchedProduct, setSearchedProduct] = useState('');

     const value = {isAuthentication, setIsAuthentication, searchedProduct, setSearchedProduct}

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
