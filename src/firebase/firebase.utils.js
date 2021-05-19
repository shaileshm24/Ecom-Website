import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1TIFy9tibGhdG-a3Vwhp10zgYJGou7AU",
  authDomain: "ecom-website-cc7ac.firebaseapp.com",
  projectId: "ecom-website-cc7ac",
  storageBucket: "ecom-website-cc7ac.appspot.com",
  messagingSenderId: "718280169287",
  appId: "1:718280169287:web:7c0593e093f6c36add9e62",
  measurementId: "G-77DSZ2J9X4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
