import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOmbzWpDT6rNC7GBeYONT-5cVoOOSMM7s",
  authDomain: "slack-clone-1c301.firebaseapp.com",
  projectId: "slack-clone-1c301",
  storageBucket: "slack-clone-1c301.appspot.com",
  messagingSenderId: "840603713718",
  appId: "1:840603713718:web:c2d0b0fef2103ff92c6617",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
