import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
import { Homepage } from './components/presentations/Homepage/Homepage';
const initialState = {
	posts: data,
	form: {
		search: ''
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	render() {
		const { posts, form } = this.state;
		return <Homepage posts={posts} search={form.search} />;
	}
}

export default App;
