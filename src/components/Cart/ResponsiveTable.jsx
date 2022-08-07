import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ResponsiveTable = ({ item, setCartItems , items, indx}) => {
    console.log("In Responsive table", item);

    const handleDelete = (e) => {
        const valueFrombtn = e.target.getAttribute("name");
        console.log("this is value: ", valueFrombtn);
        const filtered = items.filter((item, index) => index !== parseInt(valueFrombtn)
        );

     setCartItems(filtered);
    }

    return (
        <Table key={item.id}>
            <Thead>
                <Tr>
                    <Th> Name </Th>
                    <Th> price</Th>
                    <Th> quantity</Th>
                    <Th> Remove </Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>{item.name}</Td>
                    <Td>{item.price}</Td>
                    <Td>{item.quantity}</Td>
                    <Td> <button onClick={handleDelete} name={indx}> Delete </button></Td>
                </Tr>
            </Tbody>
        </Table>
    );
};


export default ResponsiveTable;