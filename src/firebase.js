import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_APP_API_KEY}`,
  authDomain: `${import.meta.env.VITE_APP_AUTH_DOMAIN}`,
  projectId: "netflix-clone-7f314",
  storageBucket: "netflix-clone-7f314.appspot.com",
  messagingSenderId: "384947029999",
  appId: "1:384947029999:web:5020b8468ccab7dbbd981a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
