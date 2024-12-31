// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5yNWc9l0z_wJQdtd7OvqDib3EMHC-3Dw",
  authDomain: "vinshealth-e36d6.firebaseapp.com",
  projectId: "vinshealth-e36d6",
  storageBucket: "vinshealth-e36d6.firebasestorage.app",
  messagingSenderId: "885309110971",
  appId: "1:885309110971:web:3485d0036b21c35159c79e",
  measurementId: "G-7WSVFWD730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);