import firestore from './firestore';
import products from '../Home/dummyData';


export const createProduct = async (record) => {
    

    console.log(record);
    const collectionRef = firestore.collection("products");

    // add to the document 
    await collectionRef.add(record);
}

// populating the database 
export const seedProducts = async () => {

    const collectionRef = firestore.collection("products");

    const data = await collectionRef.get();


    if(!data.empty) return ;


    const promises = products.map(async (product) => {
        return await collectionRef.add(product);
    })

    await Promise.all(promises)

}


export const getProducts = async () => {

   

    const collectionRef = firestore.collection("products");


    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;

    const data = documents.map((doc) => {
        return {id: doc.id, ...doc.data()}
    })

    return data;


}


// get one product;
export const getSingleProduct = async (id) => {

    var docRef = firestore.collection("products").doc(id);
       const data = await docRef.get();

     /* data.get()
         .then((doc) => {
             if (doc.exists) {
                 console.log("Document data:", doc.data());
                 let item = doc.data();
                 console.log("this si item", item);

                 return item;
             } else {
                 // doc.data() will be undefined in this case
                 console.log("No such document!");
             }
         })
         .catch((error) => {
             console.log("Error getting document:", error);
         }); */
    return docRef;
};


export const getSingleProduct2 = async (id) => {
    try {
        const collectionRef = firestore.collection("products");
        const document = collectionRef.doc(id);
        const documentData = await document.get();
        return {
            id: documentData.id,
            ...documentData.data(),
        };
    } catch (error) {
        console.error("Something wrong happened");
    }
};



