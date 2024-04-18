import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMIDICheIlX_sb_GDUjdVg7paPGosk7Fw",
    authDomain: "luxe-villas.firebaseapp.com",
    projectId: "luxe-villas",
    storageBucket: "luxe-villas.appspot.com",
    messagingSenderId: "220506576745",
    appId: "1:220506576745:web:fe8bffbd83d893b93b0ff8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;