// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ZTRQ1w2W6bAMfupLMtrVaUWGCkI21Ds",
  authDomain: "email-pass-auth-66787.firebaseapp.com",
  projectId: "email-pass-auth-66787",
  storageBucket: "email-pass-auth-66787.firebasestorage.app",
  messagingSenderId: "403486464651",
  appId: "1:403486464651:web:6967131c455c76b6ad128e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;