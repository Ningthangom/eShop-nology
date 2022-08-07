import React, { useEffect, useState } from "react";
import { getSingleProduct } from "../firebase/server";
import {useParams} from 'react-router-dom';

const ProductDetailParent = () => {
  const { productId } = useParams();
  const id = productId;
  const [product, setProduct] = useState();

/*   const getData = async () => {
      console.log("getData is called");
      let item;
      const data = await getSingleProduct(id);
      console.log(data);
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
  }; */

   const getData = async () => {
       console.log("getData is called");

       const data = await getSingleProduct(id);
       console.log(data);

       const doc = await data.get();
       const product = await doc.data();
       setProduct(product);
   }; 

  useEffect(() => {
      getData();
  }, []);

  console.log("ProductDetail: ", product);


    return <div>ProductDetailParent</div>;
};

export default ProductDetailParent;
