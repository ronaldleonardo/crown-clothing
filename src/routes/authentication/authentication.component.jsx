// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth'

// import { 
// 	auth,
// 	signInWithGooglePopup,
// 	// signInWithGoogleRedirect,
// 	createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
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


	return(
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />

{/*			<button onClick={logGoogleRedirectUser}>
				Sign in with Google Redirect
			</button>*/}

		</AuthenticationContainer>
	);
};

export default Authentication;