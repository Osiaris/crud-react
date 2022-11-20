import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTHDOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DBURL}`,
  projectId: `${process.env.REACT_APP_FIREBASE_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_SENDERID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APPID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
