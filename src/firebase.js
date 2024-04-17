// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Old config:
/*
const firebaseConfig = {
  apiKey: "AIzaSyBsNmPA8yFDXjzFfHZWEwH-ncVGzNlZjDs",
  authDomain: "brewers-base-db.firebaseapp.com",
  projectId: "brewers-base-db",
  storageBucket: "brewers-base-db.appspot.com",
  messagingSenderId: "255314939777",
  appId: "1:255314939777:web:bea82f5d7184867dae6280"
};
*/

//New Config:
const firebaseConfig = {
  apiKey: "AIzaSyAwTm6UTyJQzG8_7b3YygOYw-z-hm66geA",
  authDomain: "cedh-fringe-ddb.firebaseapp.com",
  projectId: "cedh-fringe-ddb",
  storageBucket: "cedh-fringe-ddb.appspot.com",
  messagingSenderId: "782177591979",
  appId: "1:782177591979:web:ef36373a9322e3613acdee",
  measurementId: "G-RK4DHMW971"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const auth = getAuth(app)
const image = getStorage(app)
export { app, database, auth, image }