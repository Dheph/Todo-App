import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBPV8OUipdc7UzPfTB_5WrQ6R2tjUNdwpY",
    authDomain: "flowing-outpost-287400.firebaseapp.com",
    projectId: "flowing-outpost-287400",
    storageBucket: "flowing-outpost-287400.appspot.com",
    messagingSenderId: "24570496542",
    appId: "1:24570496542:web:a5f9d9119b74b38dd5900f",
    measurementId: "G-E80P41GGWY"
  };
if(!firebase.apps.lenght){
firebase.initializeApp(firebaseConfig);
}

export default firebase;