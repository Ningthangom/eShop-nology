import React from 'react';
import products from './dummyData';
import styles from './Home.module.scss';
import Card from '../Card/Card';
import Card2 from '../Card/Card2';

const Home = () => {
    console.log(products);
  return (
      <div className={styles.home}>
          <div className={styles.home__cardGrid}>
             {/*  {products.map((product) => (
                  <Card product={product} />
              ))} */}
              {products.map((product, idx) => (
                  <Card2 product={product} key={idx} />
              ))}
          </div>
      </div>
  );
}

export default Home