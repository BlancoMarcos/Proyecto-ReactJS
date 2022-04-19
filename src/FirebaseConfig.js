// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZiPWBQ63VrME3yk3k6xqFTeeIdL7teZU",
  authDomain: "ecommerce-react-2eb6c.firebaseapp.com",
  projectId: "ecommerce-react-2eb6c",
  storageBucket: "ecommerce-react-2eb6c.appspot.com",
  messagingSenderId: "1056221761642",
  appId: "1:1056221761642:web:1090f31abf2aaf3a753a13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database