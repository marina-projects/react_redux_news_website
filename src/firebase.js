// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7yPqZRyniLfOjYdDWSm_GhdgCTMgfjr8",
  authDomain: "news-website-react-redux.firebaseapp.com",
  projectId: "news-website-react-redux",
  storageBucket: "news-website-react-redux.appspot.com",
  messagingSenderId: "107933684893",
  appId: "1:107933684893:web:4059027c762fa590adb074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const Timestamp = firebase.firestore.Timestamp;


export { db, storage, Timestamp };