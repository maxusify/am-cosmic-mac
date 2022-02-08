// Import the functions you need from the SDKs you need
import * as firebaseApp from "firebase/app";
import * as firebaseAuth from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0OHlssIYc8roz0qbrqpkQzlb2k6FftCc",
  authDomain: "cosmicmac-53a79.firebaseapp.com",
  projectId: "cosmicmac-53a79",
  storageBucket: "cosmicmac-53a79.appspot.com",
  messagingSenderId: "338047253356",
  appId: "1:338047253356:web:d9a68e2b1ed737f0bf9149",
  measurementId: "G-DWENT9WGTR",
};

// Initialize Firebase
let app;

if (firebaseApp.getApps().length === 0) {
  app = firebaseApp.initializeApp(firebaseConfig);
} else {
  app = firebaseApp.getApp();
}

const auth = firebaseAuth.getAuth();

export { auth };
