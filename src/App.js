import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { selectCollectionsForPreview } from './redux/shop/shop.selector'
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
	unsubscibeFromAuth = null;
	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
	}
	componentWillUnmount() {
		this.unsubscibeFromAuth();
	}

	render() {
		return (
			<div>
				<Header></Header>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
									<SignInAndSignUpPage />
								)
						}
					/>
				</Switch>
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionArray: selectCollectionsForPreview
});
const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
