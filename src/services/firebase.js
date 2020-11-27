import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAlKbiMxp9wKWGDBRUuqCWzMTf4xUbF1Kg",
    authDomain: "book-auction-f733d.firebaseapp.com",
    databaseURL: "https://book-auction-f733d.firebaseio.com",
    projectId: "book-auction-f733d",
    storageBucket: "book-auction-f733d.appspot.com",
    messagingSenderId: "107301796969",
    appId: "1:107301796969:web:20b1c0f273f2ad4e89f6f8",
    measurementId: "G-J10ETW06LE"
  }
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const ref = db.ref("/catalog");


  export { db, ref };