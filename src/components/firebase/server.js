import firestore from "./firestore";
import products from "../Home/dummyData";

export const createProduct = async (record) => {
    console.log(record);
    const collectionRef = firestore.collection("products");

    // add to the document
    await collectionRef.add(record);
};

// populating the database
export const seedProducts = async () => {
    const collectionRef = firestore.collection("products");

    const data = await collectionRef.get();

    if (!data.empty) return;

    const promises = products.map(async (product) => {
        return await collectionRef.add(product);
    });

    await Promise.all(promises);
};

export const getProducts = async () => {
    const collectionRef = firestore.collection("products");

    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;

    const data = documents.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });

    return data;
};

// get one product;
export const getSingleProduct = async (id) => {
    var docRef = firestore.collection("products").doc(id);
    const data = await docRef.get();
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

export const updateProductCount = async (id, record) => {
    const collectionRef = firestore.collection("products");

    // Getting a Document Reference
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.DocumentReference
    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

// cart //

export const createCart = async (record) => {
    console.log("this is record inside createCart ", record);

    console.log(record);
    const collectionRef = firestore.collection("Cart");

    // add to the document
    await collectionRef.add(record);
};

export const getCart = async () => {
    const collectionRef = firestore.collection("Cart");

    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;
    console.log("this is doc", documents);
    const data = documents.map((doc) => {
        return { id1: doc.id, ...doc.data() };
    });
    console.log(data);
    return data;
};

// export const getProducts = async () => {
//     const collectionRef = firestore.collection("products");

//     const querySnap = await collectionRef.get();

//     const documents = querySnap.docs;

//     const data = documents.map((doc) => {
//         return { id: doc.id, ...doc.data() };
//     });

//     return data;
// };

export const deleteItem = async (id) => {
    console.log("deleteItem is called inside server", id);
    // const batch = firestore.batch();
    const collectionRef = firestore.collection("Cart");

    const docRef = collectionRef.doc(id);
    // Deleting the specified docRef in our DB

    // console.log(docRef)
    //  docRef.delete();
    await docRef.delete();
    // const res = await docRef.delete();
    // console.log("return from delete", res);
};

export const updateItem = async (id, record) => {
    const collectionRef = firestore.collection("Cart");

    // Getting a Document Reference
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.DocumentReference
    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};
