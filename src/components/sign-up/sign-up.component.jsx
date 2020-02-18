import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentails] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const { displayName, email, password, confirmPassword } = userCredentials;
	const handleSubmit = async event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('password dont match');
			return;
		}

		signUpStart({ displayName, email, password });
	};
	const handleChange = event => {
		const { name, value } = event.target;

		setUserCredentails({ ...userCredentials, [name]: value });
	};


	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have a account</h2>
			<span>Sogn up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				></FormInput>
				<FormInput
					type='text'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				></FormInput>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				></FormInput>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				></FormInput>
				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</div>
	);
}
const mapDispatchToProps = dispatch => ({
	signUpStart: creds => dispatch(signUpStart(creds))
})
export default connect(null, mapDispatchToProps)(SignUp);
