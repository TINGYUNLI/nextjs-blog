// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-blog-77b2a.firebaseapp.com",
  projectId: "nextjs-blog-77b2a",
  storageBucket: "nextjs-blog-77b2a.appspot.com",
  messagingSenderId: "654874441682",
  appId: "1:654874441682:web:f17b0740edb08723597a0b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
