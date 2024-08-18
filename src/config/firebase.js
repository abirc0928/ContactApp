// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoCmTA2Spr0uziCN1SoMn6RzlWxF4SCrc",
  authDomain: "contactapp-c4afc.firebaseapp.com",
  projectId: "contactapp-c4afc",
  storageBucket: "contactapp-c4afc.appspot.com",
  messagingSenderId: "31446605036",
  appId: "1:31446605036:web:6579f82528894e7d2359c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)