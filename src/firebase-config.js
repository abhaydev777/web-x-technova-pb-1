// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIKkUJhPg6BHx0tukdSiTS-Q6_F_yGbFk",
  authDomain: "web-x-technova-pb-1.firebaseapp.com",
  projectId: "web-x-technova-pb-1",
  storageBucket: "web-x-technova-pb-1.firebasestorage.app",
  messagingSenderId: "247814707827",
  appId: "1:247814707827:web:7a6aefd47781c693f9e806",
  measurementId: "G-P00J951RLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);