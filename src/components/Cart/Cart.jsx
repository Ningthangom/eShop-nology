import { useState, useContext, useEffect } from "react";

import { SearchContext } from "../Context/Context";
import ResponsiveTable from './ResponsiveTable';
import {
    deleteItem,
    getCart,
    removeEventId,
    updateItem,
    updateProductCount,
} from "../firebase/server";

import styles from './Cart.module.scss'

const Cart = () => {

     const { cartItems, setCartItems } = useContext(SearchContext);
     const [items, setItems] = useState([]);
     const [cartTotal, setCartTotal] = useState(0);


    const getData = async () => {
        const data = await getCart();
        setItems(data);
    };

    const deleteItemFromCart = async (id) => {
        console.log("ondelete is called");
        await deleteItem(id);
        getData();
    }

    const handleChange = async (newRecord) => {
         
        const {id1, id,...record} = newRecord;
        await updateItem(id1, record);
        await updateProductCount(id, record);
    }

    useEffect(() => {
        getData();
        
    }, []);

console.log(items);
    return (
        <div className="container">
            {items
                ? items.map((item, indx) => {
                      return (
                          <ResponsiveTable
                              item={item}
                              key={item.id}
                              indx={indx}
                              onChange={handleChange}
                              onDelete = {deleteItemFromCart}
                          />
                      );
                  })
                : "please be there"}
           <div> 
            <div> 
                Cart total = { }
            </div>
           </div>
        </div>
    );
};

export default Cart;
