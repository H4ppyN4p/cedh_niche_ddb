// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsNmPA8yFDXjzFfHZWEwH-ncVGzNlZjDs",
  authDomain: "brewers-base-db.firebaseapp.com",
  projectId: "brewers-base-db",
  storageBucket: "brewers-base-db.appspot.com",
  messagingSenderId: "255314939777",
  appId: "1:255314939777:web:bea82f5d7184867dae6280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }