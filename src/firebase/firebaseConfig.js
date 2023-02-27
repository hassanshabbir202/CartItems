// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCYK9c2OwfvP4-FWAIeQFipj6jYZ9dAhc",
  authDomain: "crud-ceb5a.firebaseapp.com",
  projectId: "crud-ceb5a",
  storageBucket: "crud-ceb5a.appspot.com",
  messagingSenderId: "825611754220",
  appId: "1:825611754220:web:65eedb6ab9eaa1e67ca3c9",
  measurementId: "G-5B06EPJ0P4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default app;