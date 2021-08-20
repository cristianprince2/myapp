import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAX8YxjpwnfV8eHmaYj014p06dmnK47STs",
  authDomain: "notific-7b49e.firebaseapp.com",
  projectId: "notific-7b49e",
  storageBucket: "notific-7b49e.appspot.com",
  messagingSenderId: "482487010092",
  appId: "1:482487010092:web:c933bc7879607e259fe289"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
