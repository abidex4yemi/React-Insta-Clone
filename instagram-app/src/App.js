import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
const initialState = data;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">Instagram clone</header>
			</div>
		);
	}
}

export default App;
