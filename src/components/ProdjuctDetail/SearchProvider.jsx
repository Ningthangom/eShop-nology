import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [isDark, setIsDark] = useState(false)

    const data = { search, setSearch };


    const toggleTheme = () => setIsDark(!isDark)

    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;


