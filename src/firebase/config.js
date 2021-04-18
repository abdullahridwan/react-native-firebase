import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAH_vJX97Gyd4k247sZjyZc8PUpyx_cOpM",
  authDomain: "quickstart-1612920845787.firebaseapp.com",
  projectId: "quickstart-1612920845787",
  storageBucket: "quickstart-1612920845787.appspot.com",
  messagingSenderId: "680522783963",
  appId: "1:680522783963:web:7786fc116d61d0e845c0fe",
  measurementId: "G-YN9G7XT9WP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}




export { firebase };
