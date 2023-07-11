import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfv1GI3fwfAin17N_Pf2G9fe8PPBa1UPs",
  authDomain: "baby-equipment-exchange.firebaseapp.com",
  projectId: "baby-equipment-exchange",
  storageBucket: "baby-equipment-exchange.appspot.com",
  messagingSenderId: "375825360663",
  appId: "1:375825360663:web:2307ccd57b31bf1d74b952",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
