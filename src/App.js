import React from 'react';
import './App.css';
import Route from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);
function App() {
	return (
		<div>
			<Route exect path='/' component={HomePage} />
			<Route exect path='/hats' component={HatsPage} />
		</div>
	);
}

export default App;
