import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.components';

function App() {
	return (
		<div>
			<Switch>
				<Route path='/shop' component={ShopPage} />
				<Route path='/' component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
