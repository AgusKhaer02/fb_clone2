import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDq8J1sduf2mXWxQM0oS-9SMtGsVBBcr20',
  authDomain: 'fb-clone2.firebaseapp.com',
  databaseURL: 'https://fb-clone2.firebaseio.com',
  projectId: 'fb-clone2',
  storageBucket: 'fb-clone2.appspot.com',
  messagingSenderId: '990591022428',
  appId: '1:990591022428:web:ae58252f870b584b0fbd99',
  measurementId: 'G-SSJG4KNWKY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;