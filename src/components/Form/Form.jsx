import React, {useState, useEffect} from 'react'
import styles from './Form.module.scss'
import { useNavigate } from "react-router-dom";


const defaultProduct = {
    name: "",
    price: 0,
    quantity: 0,
    sold: 0,
    brand: "",
    rating: [0],
    description: "",
    images: [],
    favorite: false,
    colors: ["red", "green", "white", "yellow", "no color"],
    color: "",
};

const Form = ({onSubmit}) => {

    const [product, setProduct] = useState(defaultProduct);
    let navigate = useNavigate();



    // handle text inputs 
    const HandleTextChange = (event) => {
        const field = event.target.id;


        // new product
        const newProduct = {...product};

        // reassigning the value to newProduct object
        newProduct[field] = event.target.value;
        setProduct(newProduct);

    }


    const handleSubmit = (event) => {
        console.log("handleSubmit was called")
        onSubmit(product);
        setProduct(defaultProduct);
        navigate("/");

    }



    useEffect(() => {
        console.log(product);
},[product])

  return (
      <>
          <div className={styles.Form}>
              <div className={styles.Form__container}>
                  <h1> Add New Product </h1>
                  <div className={`${styles.form__group} ${styles.field}`}>
                      <input
                          type="input"
                          className={styles.form__field}
                          placeholder="Name"
                          name="name"
                          id="name"
                          onChange={HandleTextChange}
                          value={product.name}
                          required
                      />
                      <label for="name" className={styles.form__label}>
                          Name
                      </label>
                  </div>
                  <div className={`${styles.form__group} ${styles.field}`}>
                      <input
                          type="number"
                          className={styles.form__field}
                          placeholder="Price"
                          name="price"
                          value={product.price}
                          id="price"
                          required
                          onChange={HandleTextChange}
                      />
                      <label for="price" className={styles.form__label}>
                          Price
                      </label>
                  </div>
                  <div className={`${styles.form__group} ${styles.field}`}>
                      <input
                          type="number"
                          className={styles.form__field}
                          placeholder="Quantity"
                          name="quantity"
                          value={product.quantity}
                          id="quantity"
                          required
                          onChange={HandleTextChange}
                      />
                      <label for="quantity" className={styles.form__label}>
                          Quantity
                      </label>
                  </div>
                  <div className={`${styles.form__group} ${styles.field}`}>
                      <input
                          type="Number"
                          className={styles.form__field}
                          placeholder="Sold"
                          name="sold"
                          value={product.sold}
                          id="sold"
                          required
                          onChange={HandleTextChange}
                      />
                      <label for="sold" className={styles.form__label}>
                          Sold
                      </label>
                  </div>
                  <div className={`${styles.form__group} ${styles.field}`}>
                      <input
                          type="text"
                          className={styles.form__field}
                          placeholder="Brand"
                          name="brand"
                          id="brand"
                          value={product.brand}
                          required
                          onChange={HandleTextChange}
                      />
                      <label for="brand" className={styles.form__label}>
                          Brand
                      </label>
                  </div>
                  <div className={`${styles.form__group} ${styles.field}`}>
                      <input
                          type="input"
                          className={styles.form__field}
                          placeholder="enter image url"
                          name="images"
                          id="images"
                          value={product.images}
                          required
                          onChange={HandleTextChange}
                      />
                      <label for="brand" className={styles.form__label}>
                          Image Url
                      </label>
                  </div>
                  <div className={`${styles.form__group} ${styles.field}`}>
                      <label>Colors</label>
                      <select
                          name="color"
                          id="color"
                          value={product.color}
                          className="form-control"
                          onChange={HandleTextChange}
                      >
                          <option>Please select one</option>
                          {product.colors.map((c) => (
                              <option key={c} value={c}>
                                  {c}
                              </option>
                          ))}
                      </select>
                  </div>
                  <div className={`${styles.form__group} ${styles.field}`}>
                      <input
                          type="input"
                          className={styles.form__field}
                          placeholder="Description"
                          name="description"
                          value={product.description}
                          id="description"
                          required
                          onChange={HandleTextChange}
                      />
                      <label for="description" className={styles.form__label}>
                          Description
                      </label>
                  </div>
                  <button className={styles.submitBtn} onClick={handleSubmit}>
                      {" "}
                      Submit{" "}
                  </button>
              </div>
          </div>
      </>
  );
}

export default Form