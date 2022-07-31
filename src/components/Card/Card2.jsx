import React, {useState, useEffect} from 'react';
import styles from './Card2.module.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ClearIcon from "@mui/icons-material/Clear";
import { AverageRating  } from './Rating';



const Card2 = ({product}) => {
    const [isAdded, setIsAdded] = useState(false);


    const itemAddedToCart = () => {
        setIsAdded(true); 
        
    }

    useEffect(() => {
        console.log(isAdded);
    }, [isAdded]);

    
  return (
      <div className={styles.wrapper}>
          <div className={styles.container}>
              <div
                  className={styles.top}
                  style={{ backgroundImage: `url(${product.images[0]})` }}
              ></div>
              <div className={styles.bottom}>
                  {isAdded ? (
                      <div className={styles.right}>
                          <div
                              className={styles.remove}
                              onClick={(e) => setIsAdded(false)}
                          >
                              <i className="material-icons">
                                  <ClearIcon />
                              </i>
                          </div>
                          <div
                              className={styles.details}
                              style={{
                                  paddingLeft: "10px",
                                  fontSize: "19px",
                              }}
                          >
                              <h3> {product.name} </h3>
                              <p>Added to your cart</p>
                          </div>
                      </div>
                  ) : (
                      <div className={styles.left}>
                          <div className={styles.details}>
                              <h1>{product.name} </h1>
                              <p>$ {product.price}</p>
                          </div>

                          <div className={styles.buy} onClick={itemAddedToCart}>
                              <i>
                                  <AddShoppingCartIcon fontSize="large" />
                              </i>
                          </div>
                      </div>
                  )}
              </div>
          </div>
          <div className={styles.inside}>
              <div className={styles.icon}>
                  <i className="material-icons">info_outline</i>
              </div>
              <div className={styles.contents}>
                  <table>
                      <tr>
                          <th>Rating : </th>
                      </tr>
                      <tr>
                          <td>
                              {" "}
                              <AverageRating product={product.rating} />
                          </td>
                      </tr>
                      <tr>
                          <th>Price: </th>
                      </tr>
                      <tr>
                          <td> $ {product.price}</td>
                      </tr>
                      <tr>
                          <th>Available : </th>
                      </tr>
                      <tr>
                          <td>{product.quantity}</td>
                      </tr>
                      <tr>
                          <th>Sold: </th>
                      </tr>
                      <tr>
                          <td>{product.sold}</td>
                      </tr>
                      <tr>
                          <th>Description</th>
                      </tr>
                      <tr>
                          <td>
                              I should have added that to my question. I do have
                              a width and height set (100% / 400px
                              respectively). The issue arising is due to how
                              react handles static images I believe{" "}
                          </td>
                      </tr>
                  </table>
              </div>
          </div>
      </div>
  );
}

export default Card2