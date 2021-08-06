import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDyhkiYUvibudlXI4UvNk0XggvI7WEbHzU",
    authDomain: "disney-clone-e5786.firebaseapp.com",
    projectId: "disney-clone-e5786",
    storageBucket: "disney-clone-e5786.appspot.com",
    messagingSenderId: "594146140919",
    appId: "1:594146140919:web:6cdcdc1a9e6b52c0b1a9f2",
    measurementId: "G-0ZW8XX6RYH"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};

  export default db;