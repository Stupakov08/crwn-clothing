import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
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

export default App;
