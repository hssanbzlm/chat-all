// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrm368tRXu-hZOqaDEss6ReKvUzAByPZ4",
  authDomain: "chat-all-690e1.firebaseapp.com",
  projectId: "chat-all-690e1",
  storageBucket: "chat-all-690e1.appspot.com",
  messagingSenderId: "906854434825",
  appId: "1:906854434825:web:a84c2917b03193aeff90d8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const createUserProfileDocument = async (user) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, uid, photoURL } = user;
    try {
      await userRef.set({ email, displayName, uid, photoURL });
    } catch (e) {
      console.log(e);
    }
  }
};
export default app;
