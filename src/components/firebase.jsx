// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV-fs6vVNkPMJix4iih9fQYFEoccuz_2s",
  authDomain: "todo-app-267b0.firebaseapp.com",
  projectId: "todo-app-267b0",
  storageBucket: "todo-app-267b0.appspot.com",
  messagingSenderId: "445128881572",
  appId: "1:445128881572:web:fcef95318448d936c97d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() //for authentication
const provider = new GoogleAuthProvider() //for provider

const db = getFirestore(app)

export {auth , provider, db}
