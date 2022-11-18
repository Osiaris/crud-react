
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXxealUVieHq31r4xedNRe5A3VfndGN50",
  authDomain: "crud-6d4de.firebaseapp.com",
  databaseURL: "https://crud-6d4de-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crud-6d4de",
  storageBucket: "crud-6d4de.appspot.com",
  messagingSenderId: "567516069508",
  appId: "1:567516069508:web:d19bccb89e94b42da34cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
