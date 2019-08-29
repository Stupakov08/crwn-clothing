import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyByPQgVHROnNgk9lfXOfDBXm4m6KCg9sWQ',
	authDomain: 'crwn-dbt.firebaseapp.com',
	databaseURL: 'https://crwn-dbt.firebaseio.com',
	projectId: 'crwn-dbt',
	storageBucket: '',
	messagingSenderId: '135180319982',
	appId: '1:135180319982:web:9b9bb97f185a6a4a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
