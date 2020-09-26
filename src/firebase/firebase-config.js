import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIwEwkiP5gIcyIWs7a8z1a2fS2vBZKQqk',
  authDomain: 'dribbble-react.firebaseapp.com',
  databaseURL: 'https://dribbble-react.firebaseio.com',
  projectId: 'dribbble-react',
  storageBucket: 'dribbble-react.appspot.com',
  messagingSenderId: '195242991923',
  appId: '1:195242991923:web:0ed4a60a1f1626f4a19e46',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
