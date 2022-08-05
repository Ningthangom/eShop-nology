import React, {useEffect, useState} from 'react';
import styles from './ProductDetail.module.scss'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from 'react-router-dom';

import {getSingleProduct} from '../firebase/server';


const ProductDetail = () => {

  const {productId} = useParams();
  const id = productId;
  const [product, setProduct] = useState();

     const getData = async () => {
         console.log("getData is called");
      let item;
         const data = await getSingleProduct(id);
         console.log(data)
          data.get()
              .then((doc) => {
                  if (doc.exists) {
                      console.log("Document data:", doc.data());
                       item = doc.data();
                      console.log("this si item", item);
                    
                      return item;
                  } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                  }
              })
              .catch((error) => {
                  console.log("Error getting document:", error);
              });

          setProduct(item);
         
     };

     useEffect(() => {
         getData();
     }, []);

  console.log("ProductDetail: ", product);
  return (
      <>
          <Container fluid>
              <Row>
                  <Col xl={4}>
                    {/* <div className={styles.imageContainer}>
                      {product.images ? <image src={product.images} alt=""/>: "apple"}
                    </div> */}
                  </Col>
                  <Col xl={8}>
                    <div className={styles.DetailContainer}>
                        This will contain the details of a product
                    </div>
                  </Col>
              </Row>
          </Container>
      </>
  );
}

export default ProductDetail
