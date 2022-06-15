import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsre_nRgjC49OD8UFlWvT-HVFZzNnbibE",
  authDomain: "netflix-ca6c3.firebaseapp.com",
  projectId: "netflix-ca6c3",
  storageBucket: "netflix-ca6c3.appspot.com",
  messagingSenderId: "894842912801",
  appId: "1:894842912801:web:58a97fc0211cae5f44a360",
  measurementId: "G-BQQKCKLNHM",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getFirestore(firebaseApp);
console.log(storage);
export { storage };
