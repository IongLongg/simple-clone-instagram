// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAt-yCrkfS7GMWwjIFZUAGCYyq7fnZYkuQ",
    authDomain: "instagram-clone-react-583aa.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-583aa.firebaseio.com",
    projectId: "instagram-clone-react-583aa",
    storageBucket: "instagram-clone-react-583aa.appspot.com",
    messagingSenderId: "519030969165",
    appId: "1:519030969165:web:9d88dd7cb16f6bfb209d04",
    measurementId: "G-NVWF8ERN92"
};

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}



