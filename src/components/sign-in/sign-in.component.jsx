import React, { useState } from 'react';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

	const [userCredentials, setCredentials] = useState({
		email: '',
		password: ''
	});
	const { email, password } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();
		emailSignInStart(email, password);
	};
	const handleChange = e => {
		const { value, name } = e.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					label='email'
					value={email}
					required
					handleChange={handleChange}
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					required
					label='password'
					handleChange={handleChange}
				/>
				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
						Sign In With Google
						</CustomButton>
				</div>
			</form>
		</div>
	);

}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);
