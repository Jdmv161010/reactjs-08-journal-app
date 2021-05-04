import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnWg9rlhq9UTIicXLHplJwogBmC11Dd78",
  authDomain: "react-app-curso-1e2bc.firebaseapp.com",
  projectId: "react-app-curso-1e2bc",
  storageBucket: "react-app-curso-1e2bc.appspot.com",
  messagingSenderId: "218685044521",
  appId: "1:218685044521:web:ed79859f290b6e5e812938",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };