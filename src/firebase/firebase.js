// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0okrkEeQ9n-749VmQ0-UXJ9qkWnivZXk",
    authDomain: "react-ecommerce-5928d.firebaseapp.com",
    projectId: "react-ecommerce-5928d",
    storageBucket: "react-ecommerce-5928d.appspot.com",
    messagingSenderId: "354280047629",
    appId: "1:354280047629:web:1e1f95995c1f5fcad5c144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);   // accedo a db

export const db=getFirestore(app);





