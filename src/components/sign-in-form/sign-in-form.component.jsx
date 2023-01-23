import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import { SignInContainer, SignInTitle, ButtonContainer } from './sign-in-form.styles';


const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error)
            }
        }
    };
    //switch case is the same as if ... else if... else.. but easier
    //adding break will stop the code from reading everything when found match case
    return (
        <SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput 
					label='Email'
					type="email" 
					required 
					onChange={handleChange} 
					name='email' 
					value={email}
				/>

				<FormInput 
					label='Password'
					type="password" 
					required 
					onChange={handleChange} 
					name='password' 
					value={password}
				/>
				<ButtonContainer>
					<Button type="submit">Sign In</Button>
					<Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
				</ButtonContainer>

			</form>
		</SignInContainer>
    );
};

export default SignInForm;