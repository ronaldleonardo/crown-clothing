// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth'

import { 
	auth,
	signInWithGooglePopup,
	// signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
	// // If you want google redirect or any redirect
	// // It's more complicated and use useEffect because when you redirect
	// // essentially you reload the page, thus the page will be rendered new
	// // using this function it allows the page to 'remember' the action called before redirected and continue from then

	// useEffect(()=>{
	// 	const getRedirectResponse = async() => {
	// 		const response = await getRedirectResult(auth);
	// 		if(response) {
	// 			const userDocRef = await createUserDocumentFromAuth(response.user);
	// 		};
	// 	};
	// getRedirectResponse();
	// }, []);

	// const logGoogleRedirectUser = async() => {
	// 	const {user} = await signInWithGoogleRedirect();
	// 	console.log({user});
	// };

	const logGoogleUser = async() => {
		const {user} = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};


	return(
		<div>
			<h1>Sign in page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<SignUpForm />

{/*			<button onClick={logGoogleRedirectUser}>
				Sign in with Google Redirect
			</button>*/}

		</div>
	);
};

export default SignIn;