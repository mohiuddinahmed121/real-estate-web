// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBXBcaM5UOWIFOUcDhDAvaIxITRPZ9lTeE",
   authDomain: "residential-real-estate-web.firebaseapp.com",
   projectId: "residential-real-estate-web",
   storageBucket: "residential-real-estate-web.firebasestorage.app",
   messagingSenderId: "1002599719558",
   appId: "1:1002599719558:web:9f79c8fb7732f79284e707",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
