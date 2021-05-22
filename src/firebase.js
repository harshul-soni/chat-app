import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAVS3O9Glzq74kzbfOyQmaLlqe0PCKG43k",
  authDomain: "slack-8bdc3.firebaseapp.com",
  projectId: "slack-8bdc3",
  storageBucket: "slack-8bdc3.appspot.com",
  messagingSenderId: "1022081359494",
  appId: "1:1022081359494:web:3c2379893d177ba1f53b07",
  measurementId: "G-8WJ58LSV1Q"
};

firebase.initializeApp(firebaseConfig);



export default firebase;
