import React, {useState, useEffect, useRef} from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import Quantity from "./Quantity";
import {deleteItem} from '../firebase/server'

const ResponsiveTable = ({ item, onDelete , indx, onChange,  }) => {
     console.log("In Responsive table", item);


     const [qty, setQty] = useState(1);
     const [costPrice, setCostPrice] = useState(item.costPrice);

    const handleDelete = () => {
        // console.log("this is item id inside table ", item.id)
        onDelete(item.id1);
    }

    const addQuantity = () => {
        console.log("Add Quantity is clicked")
        setQty(qty + 1);
        
    }
useEffect(() => {
    setCostPrice(qty * item.price);
}, [qty])
    const decreaseQuantity = () => {
        setQty(qty - 1);
        
    };

    useEffect(() => {
        onChange({
            ...item,
            quantity: qty,
            costPrice: costPrice,
        });
    },[qty])

 
    return (
        <>
            <Table key={item.id}>
                <Thead>
                    <Tr>
                        <Th> Image </Th>
                        <Th> Name </Th>
                        <Th> unit price</Th>
                        <Th> quantity</Th>
                        <Th> Price </Th>
                        <Th> Remove </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    <Tr>
                        <Td>
                            {" "}
                            <img
                                src={item.images}
                                alt=""
                                width="200px"
                                height="200px"
                            />
                        </Td>
                        <Td>
                            <h4> {item.name}</h4>
                        </Td>
                        <Td>{item.price}</Td>
                        <Td>
                            <Quantity
                                AddQuantity={addQuantity}
                                decreaseQuantity={decreaseQuantity}
                                quantity={qty}
                            />
                        </Td>
                        <Td>{costPrice} </Td>
                        <Td>
                            {" "}
                            <button
                                onClick={handleDelete}
                                name={indx}
                                className="btn btn-danger"
                            >
                                {" "}
                                Delete{" "}
                            </button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};


export default ResponsiveTable;