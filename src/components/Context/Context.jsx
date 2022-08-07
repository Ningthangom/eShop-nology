import { createContext, useState, useRef, useEffect } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
     const cartData = useRef([]);

    const [cartItems, setCartItems] = useState(cartData.current);
   

    const data = { search, setSearch, cartItems, setCartItems};

    useEffect(() =>{
        cartData.current = cartItems;
    },[cartItems])

    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;
