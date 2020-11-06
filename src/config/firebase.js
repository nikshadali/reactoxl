import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
var firebaseConfig = {
    apiKey: "AIzaSyD4fUoVC5iP63SmJtwmg0TlF5lB9ptrNn8",
    authDomain: "ylxw-3484d.firebaseapp.com",
    databaseURL: "https://ylxw-3484d.firebaseio.com",
    projectId: "ylxw-3484d",
    storageBucket: "ylxw-3484d.appspot.com",
    messagingSenderId: "135854709839",
    appId: "1:135854709839:web:2c6bf76f7f0c5d812e9e3a",
    measurementId: "G-PCVHQLSG4F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;