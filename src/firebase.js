import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjDS8pVl-e3PYj1BSPrUMqfgsTNB-MFrw",
    authDomain: "snap-c6c25.firebaseapp.com",
    projectId: "snap-c6c25",
    storageBucket: "snap-c6c25.appspot.com",
    messagingSenderId: "19578920629",
    appId: "1:19578920629:web:cb8ca62ea8f9fa309228fc",
    measurementId: "G-GFZEMZLLZ7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider};