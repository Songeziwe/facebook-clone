import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhIokMgpKGACQtHU0fklHN8fN1xkl3ve8",
    authDomain: "facebook-clone-2f033.firebaseapp.com",
    projectId: "facebook-clone-2f033",
    storageBucket: "facebook-clone-2f033.appspot.com",
    messagingSenderId: "599016778546",
    appId: "1:599016778546:web:cecc0858066530d735052b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // accessing remote database
const auth = firebase.auth(); // accessing firebase authentication service
const provider = new firebase.auth.GoogleAuthProvider();

// to access outside of this script
export { auth, provider };
export default db;