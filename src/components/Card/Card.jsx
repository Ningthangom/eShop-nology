import React from 'react';
import styles from './Card.module.scss'


const Card = ({product}) => {
    const {name, price, description, sold, quantity, brand} = product;

    console.log("this is image: ", product.images[0])
  return (
      <div className={styles.Card}>
        <img src={product.images[0]} alt="no photos" />
          <h3> {name} </h3>
          <p> ${ price }</p>
          <p> {description}</p>
          <p> Sold: {sold}</p>
          <p> Quantity left: { quantity }</p>
          <p> Brand: { brand }</p>
          <div>    
          </div>

          <button > </button>
      </div>
  );
}

export default Card