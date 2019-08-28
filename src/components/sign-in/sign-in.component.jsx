import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}
	handleSubmit = e => {
		e.preventDefault();
	};
	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<input
						name='email'
						type='email'
						value={this.state.email}
						required
						onChange={this.handleChange}
					/>
					<label htmlFor=''>Email</label>
					<input
						name='password'
						type='password'
						value={this.state.password}
						required
						onChange={this.handleChange}
					/>
					<label htmlFor=''>Password</label>
					<input type='submit' value='Submit form' />
				</form>
			</div>
		);
	}
}

export default SignIn;
