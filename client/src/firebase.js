import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import "firebase/compat/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCi2pnYs-zB_fGhW1rFFhGgLsi7L_ivLmk",
  authDomain: "final-project-e3db0.firebaseapp.com",
  databaseURL:
    "https://final-project-e3db0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-e3db0",
  storageBucket: "final-project-e3db0.appspot.com",
  messagingSenderId: "615104479180",
  appId: "1:615104479180:web:db9402e45295886595e769",
};
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export const storage = firebase.storage();
export default firebase;
