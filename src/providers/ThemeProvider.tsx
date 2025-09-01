// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBkhICRh0Cy_Cw-iRWWw8pkUqnuf6896aY",
  authDomain: "ricorerunners.firebaseapp.com",
  projectId: "ricorerunners",
  storageBucket: "ricorerunners.firebasestorage.app",
  messagingSenderId: "238115407585",
  appId: "1:238115407585:web:18566d684b0a7e23e919a0",
  measurementId: "G-RGRDKSERPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
