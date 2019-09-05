import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
	unsubscibeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			if (user) {
				const userRef = await createUserProfileDocument(user);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
				console.log(this.state);
			}
			this.setState({ currentUser: user });
		});
	}
	componentWillUnmount() {
		this.unsubscibeFromAuth();
	}

	render() {
		return (
			<div>
				<Header></Header>
				<Switch>
					<Route path='/signin' component={SignInAndSignUpPage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/' component={HomePage} />
				</Switch>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
	null,
	mapDispatchToProps
)(App);
