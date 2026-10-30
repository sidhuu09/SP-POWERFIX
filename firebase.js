
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDx48RxI_VXZq8iP2iv-TsLY2LyB_0qjIk",
  authDomain: "sp-powerfix.firebaseapp.com",
  projectId: "sp-powerfix",
  storageBucket: "sp-powerfix.firebasestorage.app",
  messagingSenderId: "468188284294",
  appId: "1:468188284294:web:2591cb436d0db3a4731807"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
