import { initializeApp } from 'firebase/app';
import { 
	getAuth, 
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { 
	getFirestore,
	doc,
	getDoc,
	setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUj5ohMHA0Sc7rX4lFNv8S4YzXpB80FmI",
  authDomain: "crown-clothing-db-6ffd6.firebaseapp.com",
  projectId: "crown-clothing-db-6ffd6",
  storageBucket: "crown-clothing-db-6ffd6.appspot.com",
  messagingSenderId: "1084796863129",
  appId: "1:1084796863129:web:136e92e88edad87878ee08"
};

const firebaseApp = initializeApp(firebaseConfig);
 
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
	return(
		signInWithPopup(auth, googleProvider)
		);
};
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
	userAuth, 
	additionalInformation = {}
) => {
	if(!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);
	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	if(!userSnapshot.exists()){
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			})
		} catch(error){
			console.log('error creating new user', error.message);
		}
	return userDocRef;
	};
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

