// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8TY9MqE69GQbnwVYey7nlYCFZcDRoG-k",
  authDomain: "bocachica-f5a71.firebaseapp.com",
  projectId: "bocachica-f5a71",
  storageBucket: "bocachica-f5a71.firebasestorage.app",
  messagingSenderId: "100536826100",
  appId: "1:100536826100:web:270a2e71f37ecf2df286a1",
  measurementId: "G-4ZEWCG6PCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);