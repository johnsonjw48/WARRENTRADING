// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2njAm2VyfDwboLPO91aU3fGuPF1X-Tcw",
    authDomain: "warrentrading-ac9b6.firebaseapp.com",
    projectId: "warrentrading-ac9b6",
    storageBucket: "warrentrading-ac9b6.appspot.com",
    messagingSenderId: "671986103551",
    appId: "1:671986103551:web:8baf11c81b3217a92948ca",
    measurementId: "G-QSVBCWTP70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;