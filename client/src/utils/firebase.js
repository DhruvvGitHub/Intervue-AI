// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervue-ai-ea80f.firebaseapp.com",
  projectId: "intervue-ai-ea80f",
  storageBucket: "intervue-ai-ea80f.firebasestorage.app",
  messagingSenderId: "275483479502",
  appId: "1:275483479502:web:3ab0261164599343fcef9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};