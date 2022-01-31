import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
//TODO: add in .env
const firebaseConfig = {
    apiKey: "AIzaSyC5Fa2A3lcaI4yWEvA5bV0i0LE3l7D_Uio",
    authDomain: "sue-notes-project.firebaseapp.com",
    projectId: "sue-notes-project",
    storageBucket: "sue-notes-project.appspot.com",
    messagingSenderId: "955249550760",
    appId: "1:955249550760:web:8b1c6e01c0c147a9b3a99d",
    measurementId: "G-85TN4DQVLZ"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);