import firebase from "firebase/app"
import 'firebase/firestore' 
var firebaseConfig = {
    apiKey: "AIzaSyBNeejYGs1TWxKRXbC-zg41hFzz7jp99Ww",
    authDomain: "fb-crub-react.firebaseapp.com",
    projectId: "fb-crub-react",
    storageBucket: "fb-crub-react.appspot.com",
    messagingSenderId: "920861237237",
    appId: "1:920861237237:web:189a4b0978f1d83d2b4abc"
    };
  // Initialize Firebase
    const fb = firebase.initializeApp(firebaseConfig);
    export const db = fb.firestore()
