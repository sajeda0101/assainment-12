// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj31pI4RSowjNAuFNkKXHv2pZjzAVv3kk",
  authDomain: "styleworld-e7b5c.firebaseapp.com",
  projectId: "styleworld-e7b5c",
  storageBucket: "styleworld-e7b5c.appspot.com",
  messagingSenderId: "862187006194",
  appId: "1:862187006194:web:eae0a0856bcc8d9146086b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app