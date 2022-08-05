import React, {useState, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import CarouselFade from './CaroselFade'
import Card2 from '../Card/Card2';
import ImageGallery from "react-image-gallery";

import {getProducts} from '../firebase/server';

const Home = () => {
    /* console.log(products); */


    const [products, setProducts] = useState([]);
    const [productImages, setProductImages] = useState([]);

    const getData = async () => {

        console.log("getData is called");

        const data = await getProducts();
        console.log("this is data after useEffect, ", data)
        const images = data.map(product => product.images);
        console.log("this is images array", images);
        setProductImages(images);
        setProducts(data);
    }


     useEffect(() => {
         getData();
         console.log("this is productstate, ", products)
     }, []);


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
                          <NavLink to={`/products/${product.id.toString()}`}>
                              <Card2 product={product} key={product.id} />
                          </NavLink>
                      ))}
                  </div>
              </div>
          </div>
      </>
  );
}

export default Home