import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyD1-PAbwOvnE7yaVa2Om8YPTD5gr9myYjg',
  authDomain: 'firegram-b54a3.firebaseapp.com',
  databaseURL: 'https://firegram-b54a3.firebaseio.com',
  projectId: 'firegram-b54a3',
  storageBucket: 'firegram-b54a3.appspot.com',
  messagingSenderId: '938114785050',
  appId: '1:938114785050:web:5f81407f559e24243b16a3',
  measurementId: 'G-NL283E4YBE',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };
