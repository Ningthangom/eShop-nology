import { useState, useContext, useEffect } from "react";

import { SearchContext } from "../Context/Context";
import ResponsiveTable from './ResponsiveTable'

const Cart = () => {

     const { cartItems, setCartItems } = useContext(SearchContext);
   

    console.log("cart", cartItems);

    return (
        <div>
            {cartItems
                ? cartItems.map((item, indx) => {
                      return (
                          <ResponsiveTable
                              item={item}
                              key={item.id}
                              setCartItems={setCartItems}
                              items={cartItems}
                              indx = {indx}
                          />
                      );
                  })
                : "please be there"}
            Cart items should be here
        </div>
    );
};

export default Cart;
