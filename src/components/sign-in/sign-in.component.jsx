import React from 'react';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions'

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}
	handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (err) {
			console.log(err);
		}
	};
	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		const { googleSignInStart } = this.props;
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						label='email'
						value={this.state.email}
						required
						handleChange={this.handleChange}
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						required
						label='password'
						handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart())
})
export default connect(null, mapDispatchToProps)(SignIn);
