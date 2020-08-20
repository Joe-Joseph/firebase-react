import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAjNHf9S-Syy6F_lhZWHw4llsMbSx8HfZM",
    authDomain: "joe-marioplan.firebaseapp.com",
    databaseURL: "https://joe-marioplan.firebaseio.com",
    projectId: "joe-marioplan",
    storageBucket: "joe-marioplan.appspot.com",
    messagingSenderId: "822810286817",
    appId: "1:822810286817:web:c147b84d0bfe78060875a0",
    measurementId: "G-RBL7S6426X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;