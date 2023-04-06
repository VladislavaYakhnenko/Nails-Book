import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyDivtEpQRm5I1T4Mf7e4xCKmyjkoBTf3kU",
    authDomain: "nails-book-app.firebaseapp.com",
    projectId: "nails-book-app",
    storageBucket: "nails-book-app.appspot.com",
    messagingSenderId: "1036773917188",
    appId: "1:1036773917188:web:ef1c6b09726eef23ffab51"
};

export const app = initializeApp(firebaseConfig);