// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-81a83.firebaseapp.com",
  projectId: "mern-estate-81a83",
  storageBucket: "mern-estate-81a83.appspot.com",
  messagingSenderId: "1049443375253",
  appId: "1:1049443375253:web:90252ba10a68e85a9c239c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);