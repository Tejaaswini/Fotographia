import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRAEMgN2cf1ZGtVHGvap-koHp4PlmiAJc",
  authDomain: "fotographia-e5713.firebaseapp.com",
  databaseURL: "https://fotographia-e5713.firebaseio.com",
  projectId: "fotographia-e5713",
  storageBucket: "fotographia-e5713.appspot.com",
  messagingSenderId: "1005182577403",
  appId: "1:1005182577403:web:6010c5fc9e78067b7dde5e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
