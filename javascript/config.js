import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtfLUtif4jaQ7Z34UDFgeH4Eb4isixE5c",
  authDomain: "tacquizapp.firebaseapp.com",
  projectId: "tacquizapp",
  storageBucket: "tacquizapp.firebasestorage.app",
  messagingSenderId: "941678635509",
  appId: "1:941678635509:web:253f5065e81b1883e918bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getFirestore,
  doc,
  setDoc,
  auth,
  db,
  collection,
  addDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit
}