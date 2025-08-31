// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
firebase.initializeApp(firebaseConfig);

// Firestore and Auth instances
const db = firebase.firestore();
const auth = firebase.auth();

db.collection("test").get()
  .then(snap => console.log("Connected to Firestore:", snap))
  .catch(err => console.error(err));

