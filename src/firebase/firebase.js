import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvNNCGAa5HE-zQEKgn7QjVi15mg7vTzS0",
  authDomain: "kyeal-53aa2.firebaseapp.com",
  projectId: "kyeal-53aa2",
  storageBucket: "kyeal-53aa2.firebasestorage.app",
  messagingSenderId: "1055872257014",
  appId: "1:1055872257014:web:955d8eaa051efb046615d7",
  measurementId: "G-1G7K5PZCBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
