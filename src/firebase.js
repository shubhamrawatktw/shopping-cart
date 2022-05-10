import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAJ8Tyl2EIOjuhUpuqSPtKojVcr09P8euk",
  authDomain: "cart-cbb01.firebaseapp.com",
  projectId: "cart-cbb01",
  storageBucket: "cart-cbb01.appspot.com",
  messagingSenderId: "279723420497",
  appId: "1:279723420497:web:1103524129b87184034170"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };