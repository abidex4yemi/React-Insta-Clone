import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
import { Homepage } from './components/presentations/Homepage/Homepage';
const initialState = {
	posts: [],
	form: {
		search: ''
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	getPosts = data => {
		return new Promise((resolve, reject) => {
			if (data) {
				return resolve(data);
			}

			return reject(new Error('fail importing post data'));
		});
	};

	componentDidMount() {
		this.getPosts(data).then(posts => this.setState({ posts }));
	}

	render() {
		const { posts, form } = this.state;
		return <Homepage posts={posts} search={form.search} />;
	}
}

export default App;
