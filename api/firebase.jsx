// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdRqWdVTjJAeIC73awTaUQ4Npycntbmnk",
  authDomain: "myhealth-6d1f7.firebaseapp.com",
  projectId: "myhealth-6d1f7",
  storageBucket: "myhealth-6d1f7.appspot.com",
  messagingSenderId: "106858761384",
  appId: "1:106858761384:web:2a1713de6bd0335b8a069d",
  measurementId: "G-Q45W1SDFMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)