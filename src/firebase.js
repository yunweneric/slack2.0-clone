// @ts-ignore
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCBKxazbu1V51NKpRTc7mxv3FfK-48OI-s",
  authDomain: "slack-clone2p0.firebaseapp.com",
  projectId: "slack-clone2p0",
  storageBucket: "slack-clone2p0.appspot.com",
  messagingSenderId: "802133048343",
  appId: "1:802133048343:web:7713ded0be4ad50ef2f052",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
