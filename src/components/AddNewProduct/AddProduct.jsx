import React from 'react';
import Form from '../Form/Form';
import {createProduct} from '../firebase/server'

const AddProduct = () => {
    const handleCreateNewProduct = async (newRecord) => {
        console.log("New product object: ", newRecord)
        await createProduct(newRecord);
    }
  return (
    <div><Form onSubmit= {handleCreateNewProduct}/></div>
  )
}

export default AddProduct;