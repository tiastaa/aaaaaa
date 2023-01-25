import React, { createContext, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
//// import firebase from "firebase";
//// import "firebase/firestore";
//// import "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBWAnSv6TtGM763um452IndWWrjsUvcDmA",
//   authDomain: "react-anime-e264b.firebaseapp.com",
//   projectId: "react-anime-e264b",
//   storageBucket: "react-anime-e264b.appspot.com",
//   messagingSenderId: "961727938053",
//   appId: "1:961727938053:web:aa58857a0f65a3c099a66c",
//   measurementId: "G-SK8FECBT21",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const analytics = getAnalytics(app);

// export const Context = createContext(null);
// const auth = new GoogleAuthProvider();
// // const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Context.Provider
  //   // value={{
  //   //   firebase,
  //   //   auth,
  //   //   // firestore,
  //   // }}
  // >
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  //* </Context.Provider> */
);
