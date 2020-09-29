import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAfTOOjQVec_tTFtBnO3XiNU9dIFGc4GU",
  authDomain: "react-chat-c604e.firebaseapp.com",
  databaseURL: "https://react-chat-c604e.firebaseio.com",
  projectId: "react-chat-c604e",
  storageBucket: "react-chat-c604e.appspot.com",
  messagingSenderId: "507733826734",
  appId: "1:507733826734:web:4475b60db6ae497b93a13f",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
const database = firebase.database;

export { auth, database };
