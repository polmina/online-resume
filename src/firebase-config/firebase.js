import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2TcO_ofj2PBCZHC_Fx-EoqKods2BXYJM",
  authDomain: "fakeslack-3faa0.firebaseapp.com",
  projectId: "fakeslack-3faa0",
  storageBucket: "fakeslack-3faa0.appspot.com",
  messagingSenderId: "722801315671",
  appId: "1:722801315671:web:9d9d1237ec2c6f17aef812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
