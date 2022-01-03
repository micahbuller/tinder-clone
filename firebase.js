// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnqQir9Pw-kcPAThDbg_XLdlEPVnsjD-w",
  authDomain: "tinder-clone-52a13.firebaseapp.com",
  projectId: "tinder-clone-52a13",
  storageBucket: "tinder-clone-52a13.appspot.com",
  messagingSenderId: "207402516524",
  appId: "1:207402516524:web:1e7e4d37620c393e73d189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db};