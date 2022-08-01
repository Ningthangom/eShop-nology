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

    console.log("getProduct is called in server")

    const collectionRef = firestore.collection("products");


    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;

    const data = documents.map((doc) => {
        return {id: doc.id, ...doc.data()}
    })

    console.log("data: ", data)
    return data;


}



