// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjmjpVwbQidcFimWWrvz3r5LMlsRvXjsA",
  authDomain: "clinzee-7bfb9.firebaseapp.com",
  projectId: "clinzee-7bfb9",
  storageBucket: "clinzee-7bfb9.firebasestorage.app",
  messagingSenderId: "1020280497375",
  appId: "1:1020280497375:web:0f62a04ce9b362a468f56a",
  measurementId: "G-WXELRWQWR0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
const db = getFirestore(app);
export { db };
