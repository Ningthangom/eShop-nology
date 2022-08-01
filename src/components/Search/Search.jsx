import React, { useEffect } from "react";
/* import ResultedBooks from "../BookList/BookList"; */
import { useState } from "react";
import styles from "./Search.module.scss";

const Search = ({onSubmit}) => {
    const [textInput, setTextInput] = useState("");


  
    const handleSearch  = () => {

    }

    const handleOnChange = (e) => {
        setTextInput(e.target.value);
    }
   
    useEffect(() => {
        console.log(textInput);
    })

    return (
        <>
            <div className={styles.Search}>
                <div className={styles.search_box}>
                    <form onSubmit={handleSearch}>
                        {" "}
                        <input
                            type="text"
                            className={styles.input_search}
                            placeholder="Type to Search..."
                            onChange={handleOnChange}
                            value={textInput}
                        />
                        <button className={styles.btn_search} type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Search;
