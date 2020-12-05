/** @format */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6NWJsys-_wNLA7be4blNKjinlKLeJ9NI",
  authDomain: "whatapp-clone-e17e3.firebaseapp.com",
  projectId: "whatapp-clone-e17e3",
  storageBucket: "whatapp-clone-e17e3.appspot.com",
  messagingSenderId: "820853306585",
  appId: "1:820853306585:web:5dbd618aaa5e1c176e3ac8",
  measurementId: "G-ZVQ8L1RD4Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
