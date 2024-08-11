// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfGu1FUnJ3Thp1VFmbC4dOKB0wYwIOOFg",
  authDomain: "financy-41b43.firebaseapp.com",
  projectId: "financy-41b43",
  storageBucket: "financy-41b43.appspot.com",
  messagingSenderId: "805312318493",
  appId: "1:805312318493:web:4ac1eb5fbda1148cc9caf4",
  measurementId: "G-D33DB6KGDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);