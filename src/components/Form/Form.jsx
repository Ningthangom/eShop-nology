import React from 'react'
import styles from './Form.module.scss'

const Form = () => {

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
                          id="price"
                          required
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
                          id="quantity"
                          required
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
                          id="sold"
                          required
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
                          required
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
                          name="image"
                          id="image"
                          required
                      />
                      <label for="brand" className={styles.form__label}>
                          Image Url
                      </label>
                  </div>
                  <div className={`${styles.form__group} ${styles.field}`}>
                      <input
                          type="input"
                          className={styles.form__field}
                          placeholder="Description"
                          name="description"
                          id="description"
                          required
                      />
                      <label for="description" className={styles.form__label}>
                          Description
                      </label>
                  </div>
                  <button className={styles.submitBtn} > Submit </button>
              </div>
          </div>
      </>
  );
}

export default Form