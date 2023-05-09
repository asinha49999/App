import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBo6irDoDVJeUf7XTxHLfGxG1zLDYOhoyA",
  authDomain: "e-library-67768.firebaseapp.com",
  projectId: "e-library-67768",
  storageBucket: "e-library-67768.appspot.com",
  messagingSenderId: "1049949115881",
  appId: "1:1049949115881:web:bb9631c92c2d450bf4a778"
};

// Initialize Firebase
firebase.initializeApp = initializeApp(firebaseConfig);
export default firebase.firestore()