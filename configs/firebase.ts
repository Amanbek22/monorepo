import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1zNeRO_3AIZ5ogIF1_XIlDT1RXPHqkMk",
  authDomain: "bit-obmen.firebaseapp.com",
  projectId: "bit-obmen",
  storageBucket: "bit-obmen.appspot.com",
  messagingSenderId: "457854668056",
  appId: "1:457854668056:web:f95361bdb266ec5034a26d",
  measurementId: "G-S7KJTSHF7X",
};
const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb);
