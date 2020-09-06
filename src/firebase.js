import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBV3s6htt8zZd6GmvcuEoDtaAwXTLSdbfY",
    authDomain: "invoicingapp-cfecd.firebaseapp.com",
    databaseURL: "https://invoicingapp-cfecd.firebaseio.com",
    projectId: "invoicingapp-cfecd",
    storageBucket: "invoicingapp-cfecd.appspot.com",
    messagingSenderId: "544357562150",
    appId: "1:544357562150:web:9e6033c236f35a04b9f3e7"
  };
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export { fire };


