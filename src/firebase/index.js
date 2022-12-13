import { initializeApp } from "firebase/app";
/* import { getFirestore } from 'firebase/firestore'; */
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBHWC7ZFsXoJYPimRxybVuO0rWf7TChzFg",
  authDomain: "testapp1-2b415.firebaseapp.com",
  projectId: "testapp1-2b415",
  storageBucket: "testapp1-2b415.appspot.com",
  messagingSenderId: "181729015181",
  appId: "1:181729015181:web:3675666c6bd2cf2c5d79c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const db = getFirestore(app);
const auth = getAuth(app); */

export { app };