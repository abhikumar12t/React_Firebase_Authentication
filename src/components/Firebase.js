
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDY3suuLHJTBFaKshPEocbxyfBOZWSZR4k",
  authDomain: "react-authentication-fir-9e0bf.firebaseapp.com",
  projectId: "react-authentication-fir-9e0bf",
  storageBucket: "react-authentication-fir-9e0bf.firebasestorage.app",
  messagingSenderId: "419279735631",
  appId: "1:419279735631:web:41ca21360ea41a8df0133a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
