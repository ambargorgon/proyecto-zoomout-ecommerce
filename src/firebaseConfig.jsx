import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBJJx_e02oDBygQboLZc9x-W-bh-mxoYQU",
  authDomain: "zoomout-tienda.firebaseapp.com",
  projectId: "zoomout-tienda",
  storageBucket: "zoomout-tienda.appspot.com",
  messagingSenderId: "769789631989",
  appId: "1:769789631989:web:5f6984a4e2152dcdbdd4bc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)