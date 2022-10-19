// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAfV6O3oUp4IeZQf00wQ1dtt2g53JDBs7M",
  authDomain: "authentication-4a59e.firebaseapp.com",
  databaseURL: "https://authentication-4a59e-default-rtdb.firebaseio.com",
  projectId: "authentication-4a59e",
  storageBucket: "authentication-4a59e.appspot.com",
  messagingSenderId: "996703961982",
  appId: "1:996703961982:web:c9dd45e5697498ebb5692f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}