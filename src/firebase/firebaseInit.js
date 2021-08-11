import firebase from 'firebase/app'
import 'firebase/firestore'

//App's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDQS10NLeO7kdIg-vpasOd98KG2EGT8ddQ",
    authDomain: "fireblogsapp-92c5c.firebaseapp.com",
    projectId: "fireblogsapp-92c5c",
    storageBucket: "fireblogsapp-92c5c.appspot.com",
    messagingSenderId: "749912735332",
    appId: "1:749912735332:web:dbea73dcf9931820e52971"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export {
    timeStamp
}

export default firebaseApp.firestore()