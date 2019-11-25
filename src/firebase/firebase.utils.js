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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData
			});
		} catch (error) {
			console.log('error create user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);


export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch()
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit()
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
