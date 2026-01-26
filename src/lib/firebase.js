// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA0bZkHJwKmjFEjTI4_pUDmzhI1q_KwqsA",
    authDomain: "dahlia-portfolio.firebaseapp.com",
    projectId: "dahlia-portfolio",
    storageBucket: "dahlia-portfolio.firebasestorage.app",
    messagingSenderId: "45662853847",
    appId: "1:45662853847:web:1c6e536fa5b63aff8dae92",
    measurementId: "G-3278SWG48H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
