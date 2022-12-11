import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import "firebase/compat/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQ6k-6Q_dQk1eTEQHcV24OQhrFu3um7uM",
    authDomain: "gori-labs.firebaseapp.com",
    projectId: "gori-labs",
    storageBucket: "gori-labs.appspot.com",
    messagingSenderId: "626135297601",
    appId: "1:626135297601:web:3e7960ff53cdce15dd60c0",
    measurementId: "G-P19RGPWTD2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.getStorage


export { firebase, auth, db, storage }