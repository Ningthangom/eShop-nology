import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBy43rj-4aebm-QGNpmP4TYxYHWArMH6o",
    authDomain: "onestop-95e65.firebaseapp.com",
    projectId: "onestop-95e65",
    storageBucket: "onestop-95e65.appspot.com",
    messagingSenderId: "361106958010",
    appId: "1:361106958010:web:8a8a3f1ede76158d190483",
    measurementId: "G-3RY8TQNHJZ",
};


firebase.initializeApp(firebaseConfig);

// Initialise our Firebase
const firestore = firebase.firestore();
export default firestore;