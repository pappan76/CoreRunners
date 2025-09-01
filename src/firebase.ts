import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkhICRh0Cy_Cw-iRWWw8pkUqnuf6896aY",
  authDomain: "ricorerunners.firebaseapp.com",
  projectId: "ricorerunners",
  storageBucket: "ricorerunners.firebasestorage.app",
  messagingSenderId: "238115407585",
  appId: "1:238115407585:web:18566d684b0a7e23e919a0",
  measurementId: "G-RGRDKSERPR"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
