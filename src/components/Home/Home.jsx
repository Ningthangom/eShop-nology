import React, { useState, useEffect, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from './Home.module.scss';

import CarouselFade from './CaroselFade'
import Card2 from '../Card/Card2';

import { SearchContext } from "../Context/Context";

import {getProducts} from '../firebase/server';
import {Link } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const { cartItems, setCartItems } = useContext(SearchContext);


       

    const getData = async () => {

        

        const data = await getProducts();
        
        const images = data.map(product => product.images);
       
        setProductImages(images);
        setProducts(data);
    }


     useEffect(() => {
         getData();
     }, []);

     useEffect(() => {console.log("this is cartItems from useContext", cartItems)}, [cartItems]);

 

  return (
      <>
          <div style={{ marginTop: "10px" }}>
              {" "}
              <CarouselFade products={products} />
          </div>

          <div className={styles.HomeContainer}>
              <div className={styles.home}>
                  <div className={styles.home__cardGrid}>
                      {products.map((product) => (
                          <Card2 product={product} key={product.id} />
                      ))}
                  </div>
              </div>
          </div>
      </>
  );
}

export default Home