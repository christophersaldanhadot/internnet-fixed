// Import only what you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAMkmzdJv33uqUtJswwpNNetz4QMH5hI2g",
  authDomain: "internnet-b8690.firebaseapp.com",
  projectId: "internnet-b8690",
  storageBucket: "internnet-b8690.appspot.com",
  messagingSenderId: "757470457059",
  appId: "1:757470457059:web:ed442bdb072d7c89b369d6",
  measurementId: "G-EZZ381KW7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialized services
export const auth = getAuth(app);
export const db = getFirestore(app);
