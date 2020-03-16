import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyByPQgVHROnNgk9lfXOfDBXm4m6KCg9sWQ",
  authDomain: "crwn-dbt.firebaseapp.com",
  databaseURL: "https://crwn-dbt.firebaseio.com",
  projectId: "crwn-dbt",
  storageBucket: "crwn-dbt.appspot.com",
  messagingSenderId: "135180319982",
  appId: "1:135180319982:web:9b9bb97f185a6a4a"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
