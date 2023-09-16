// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCBFUiVWWKUrdcU44_EfDyE0saQOSnomE",
  authDomain: "disneystore-c8214.firebaseapp.com",
  projectId: "disneystore-c8214",
  storageBucket: "disneystore-c8214.appspot.com",
  messagingSenderId: "952390473712",
  appId: "1:952390473712:web:6493e1f1be261eddf12f35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export default getFirestore(app)
