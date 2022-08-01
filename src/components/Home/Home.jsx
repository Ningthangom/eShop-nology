import React, {useState, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from './Home.module.scss';
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
          <div className={styles.HomeContainer}>
              <div className={styles.carouselContainer}>
                  <div className={styles.carouselContainer__carousel}>
                      <Carousel
                          slidesToShow={3}
                          cellSpacing={20}
                          slideWidth={0.75}
                          cellAlign="center"
                          width="80%"
                      >
                          {productImages &&
                              productImages.map((image) => (
                                  <img src={image} width="80%" />
                              ))}
                      </Carousel>
                  </div>
              </div>

              <div className={styles.home}>
                  <div className={styles.home__cardGrid}>
                      {/*  {products.map((product) => (
                  <Card product={product} />
              ))} */}
                      {products.map((product, idx) => (
                          <Card2 product={product} key={product.id} />
                      ))}
                  </div>
              </div>
          </div>
      </>
  );
}

export default Home