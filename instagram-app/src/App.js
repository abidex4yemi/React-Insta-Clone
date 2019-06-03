import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
import { Homepage } from './components/presentations/Homepage/Homepage';
const initialState = {
	posts: data
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	render() {
		const { posts } = this.state;
		return <Homepage posts={posts} />;
	}
}

export default App;
