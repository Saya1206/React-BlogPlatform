// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSZp45pH_RHIMHDeS7itdQK6hM7ixG0oI",
  authDomain: "blogproject-80afc.firebaseapp.com",
  projectId: "blogproject-80afc",
  storageBucket: "blogproject-80afc.firebasestorage.app",
  messagingSenderId: "251941297646",
  appId: "1:251941297646:web:bb9bbc49b9c9422db9c2ff",
  measurementId: "G-L3HC9RJRW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
