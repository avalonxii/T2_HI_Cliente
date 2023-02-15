import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from "firebase/firestore/lite";

//conection

const firebaseConfig = {
  apiKey: "AIzaSyAhjgkiaNB1mYItBnIQa-z4Z-MtzQOIrGk",
  authDomain: "react-frontend-campusfp.firebaseapp.com",
  projectId: "react-frontend-campusfp",
  storageBucket: "react-frontend-campusfp.appspot.com",
  messagingSenderId: "951856074694",
  appId: "1:951856074694:web:cbfa521700e02ecb402cc7",
  measurementId: "G-YTVPFM71VC",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//set data
export const guardar = async (datos) => {
  try {
    await addDoc(collection(db, "usuarios"), datos);
  } catch (error) {
    console.log(error);
  }
};
