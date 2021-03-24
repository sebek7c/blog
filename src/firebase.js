import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCHc6UeJmtFngx2_0TXjrZ1EifbciOaqmc",
  authDomain: "blog-monika.firebaseapp.com",
  projectId: "blog-monika",
  storageBucket: "blog-monika.appspot.com",
  messagingSenderId: "493318934631",
  appId: "1:493318934631:web:830db2db98a56b688cc4c2",
  measurementId: "G-FSQFTZ09LP",
});

export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default app;
