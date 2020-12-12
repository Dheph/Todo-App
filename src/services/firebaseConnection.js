import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    //firebase configuration
  };
if(!firebase.apps.lenght){
firebase.initializeApp(firebaseConfig);
}

export default firebase;