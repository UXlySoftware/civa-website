// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_tgHgvNUGSjzi_lIe8DlgGiPTYvAUbFI",
  authDomain: "civa-website.firebaseapp.com",
  projectId: "civa-website",
  storageBucket: "civa-website.appspot.com",
  messagingSenderId: "425286842949",
  appId: "1:425286842949:web:e2de07b556552f7f5e812c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
