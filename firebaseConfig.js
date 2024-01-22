// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjTGyRXXZr4EZXyedjiTH7bI9HF-JhyW4",
  authDomain: "project-clean-up-38f1f.firebaseapp.com",
  projectId: "project-clean-up-38f1f",
  storageBucket: "project-clean-up-38f1f.appspot.com",
  messagingSenderId: "1019116237387",
  appId: "1:1019116237387:web:fe6ffd4146423a628e13ce",
  measurementId: "G-GB5WGYGMH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);