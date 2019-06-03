import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
import { PostContainer } from './components/PostContainer/PostContainer';
const initialState = data;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	render() {
		return (
			<React.Fragment>
				<header>
					<div className="container">
						<div className="header-content">header content goes here.</div>
					</div>
				</header>

				<main class="main-section">
					<div className="container">main contaent goes here</div>
				</main>

				<footer className="main-footer">
					<div className="container">footer content goes here</div>
				</footer>
			</React.Fragment>
		);
	}
}

export default App;
