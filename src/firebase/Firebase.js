
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-NmFnQiVy8aAflgRQzpMEiUxEmuYxbLk",
  authDomain: "itemcollection-3c45d.firebaseapp.com",
  projectId: "itemcollection-3c45d",
  storageBucket: "itemcollection-3c45d.appspot.com",
  messagingSenderId: "387662457632",
  appId: "1:387662457632:web:62c08ee981dfb769d04545"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);