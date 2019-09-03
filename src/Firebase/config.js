import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ4xQXULFhh51CV7VPgNnuOEZy3jsVaQQ",
  authDomain: "react-drawer-1.firebaseapp.com",
  databaseURL: "https://react-drawer-1.firebaseio.com",
  projectId: "react-drawer-1",
  storageBucket: "react-drawer-1.appspot.com",
  messagingSenderId: "177095687889",
  appId: "1:177095687889:web:bb54c343d4998b6a"
};

class Firebase {
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
  }

  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err);
        return err;
      });
    return user;
  }
  async signUp(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err);
        return err;
      });
    return user;
  }
  async logOut() {
    await firebase
      .auth()
      .signOut()
      .catch(err => {
        console.log(err);
      });
  }
  async getUserState() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
