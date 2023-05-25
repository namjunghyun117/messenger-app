// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtMyOqhD_5_HQ32uO38R7AjjBPvoS5XiM",
  authDomain: "messenger-app-644c5.firebaseapp.com",
  projectId: "messenger-app-644c5",
  storageBucket: "messenger-app-644c5.appspot.com",
  messagingSenderId: "1051020767633",
  appId: "1:1051020767633:web:2b3cb5ad5c0359d1022a30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();

