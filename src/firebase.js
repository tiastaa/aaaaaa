import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "@firebase/firestore";
// import { getAuth } from "firebase/auth";
// const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyBWAnSv6TtGM763um452IndWWrjsUvcDmA",
  authDomain: "react-anime-e264b.firebaseapp.com",
  projectId: "react-anime-e264b",
  storageBucket: "react-anime-e264b.appspot.com",
  messagingSenderId: "961727938053",
  appId: "1:961727938053:web:aa58857a0f65a3c099a66c",
  measurementId: "G-SK8FECBT21",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
// export  const auth = getAuth(app);
