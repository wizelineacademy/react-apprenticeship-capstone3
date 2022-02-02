// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "flutterfacebook-e566f.firebaseapp.com",
  databaseURL: "https://flutterfacebook-e566f.firebaseio.com",
  projectId: "flutterfacebook-e566f",
  storageBucket: "flutterfacebook-e566f.appspot.com",
  messagingSenderId: "968086139018",
  appId: "1:968086139018:web:9818fa3af803e56c847d73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

