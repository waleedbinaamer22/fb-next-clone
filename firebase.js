import firebase from 'firebase';
import 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0t3kCT6gN6ZAlux6eDWJPfbBqZz3t92I",
    authDomain: "facebook-2-yt-e89de.firebaseapp.com",
    projectId: "facebook-2-yt-e89de",
    storageBucket: "facebook-2-yt-e89de.appspot.com",
    messagingSenderId: "52323725848",
    appId: "1:52323725848:web:1595092ad031bb47d7c96d",
    measurementId: "G-P9WJ4QQRQL"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app(); 

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage}