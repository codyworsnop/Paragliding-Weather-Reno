// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { message } from 'antd'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwAn3YNtWiDXi2mHDkHzfA1BqZXCqheQo",
    authDomain: "paraglidingweatherreno.firebaseapp.com",
    projectId: "paraglidingweatherreno",
    storageBucket: "paraglidingweatherreno.appspot.com",
    messagingSenderId: "980837173884",
    appId: "1:980837173884:web:0780a51bad52b6bab9d7f9",
    measurementId: "G-NQBMW697JC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider()

export const signInWithEmail = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider)
    } catch (error) {
        message.error("Error occurred logging in: " + error)
    }
};

export const registerWithEmailAndPassword = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
};

export const sendPasswordResetEmailHelper = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        message.success("Password reset link sent!");
    } catch (err) {
        console.error(err);
        message.error(err.message);
    }
};

export const logout = () => {
    auth.signOut();
};