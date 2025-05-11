// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
   apiKey: "AIzaSyCqPYMiGsSLep2CcsmO5O48tkcRk1KxR0w",
  authDomain: "serverless-forum.firebaseapp.com",
  projectId: "serverless-forum",
  storageBucket: "serverless-forum.firebasestorage.app",
  messagingSenderId: "548343444945",
  appId: "1:548343444945:web:c7e3ca4c9638a8d6a49cf0",
 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
