import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBk1C74Lry7XGdqySutWvofQ-KfvuE6LWc",
  authDomain: "assignment-1-f9465.firebaseapp.com",
  projectId: "assignment-1-f9465",
  storageBucket: "assignment-1-f9465.appspot.com",
  messagingSenderId: "242233443981",
  appId: "1:242233443981:web:1a1bedc1480c07d90504c4",
  measurementId: "G-9LT3G9E84P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db =getFirestore(app)

export default db