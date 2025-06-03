import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOTjd6vAyDt7DuQxauMksjuRxlVxDmVug",
  authDomain: "restaurants-app-19c6e.firebaseapp.com",
  projectId: "restaurants-app-19c6e",
  storageBucket: "restaurants-app-19c6e.firebasestorage.app",
  messagingSenderId: "505100390659",
  appId: "1:505100390659:web:6464435e0e8ba51374d936",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
