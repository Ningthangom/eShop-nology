import React, {useEffect, useState} from 'react';
import styles from './ProductDetail.module.scss'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from 'react-router-dom';

import {getSingleProduct2} from '../firebase/server';
import {AverageRating} from "../Card/Rating";


const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const getData = async (id) => {
        const product = await getSingleProduct2(id);
        setProduct(product);
    };

    useEffect(() => {
        getData(productId);
    }, []);

    console.log("ProductDetail: ", product);
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xl={4}>
                        <div className={styles.imageContainer}>
                            {product && (
                                <img
                                    src={product.images}
                                    alt=""
                                    id={styles.image}
                                />
                            )}
                        </div>
                    </Col>
                    <Col xl={8}>
                        <div className={styles.DetailContainer}>
                            <h2> {product.name}</h2>
                            <p> ${product.price}</p>
                            <p> {product.description}</p>

                            <AverageRating product={product.rating} />
                            <p> {product.favorite ? "true" : "false"}</p>
                            <p> Available in : { product.color ? product.color.charAt(0).toUpperCase() + product.color.slice(1) : ""}</p>
                            <div>
                                <button className="btn btn-danger">
                                    {" "}
                                    add to wish list
                                </button>
                                <button className="btn btn-primary m-4">
                                    {" "}
                                    add to cart{" "}
                                </button>
                                <button className="btn btn-warning m-4">
                                    {" "}
                                   Add to favorite list
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductDetail;

