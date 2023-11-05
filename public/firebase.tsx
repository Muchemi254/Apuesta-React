// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCATIorRnZwATAc79j7Ez8d1WEG2WD7Ggw",
  authDomain: "auth-33fba.firebaseapp.com",
  databaseURL: "https://auth-33fba-default-rtdb.firebaseio.com",
  projectId: "auth-33fba",
  storageBucket: "auth-33fba.appspot.com",
  messagingSenderId: "401028275687",
  appId: "1:401028275687:web:74bf3f3a6309a14f677142",
  measurementId: "G-ZCBR3FL788",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
