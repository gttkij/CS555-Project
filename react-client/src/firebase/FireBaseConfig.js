// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuYrZxRYWngul3mcTFr-068Dgl8fu471s",
  authDomain: "cs555-project.firebaseapp.com",
  projectId: "cs555-project",
  storageBucket: "cs555-project.firebasestorage.app",
  messagingSenderId: "252609407568",
  appId: "1:252609407568:web:a8e8688d4f136c79ba7f55",
  measurementId: "G-ERCEQN3KG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
