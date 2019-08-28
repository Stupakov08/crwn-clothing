import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';

function App() {
	return (
		<div>
			<Header></Header>
			<Switch>
				<Route path='/shop' component={ShopPage} />
				<Route path='/' component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
