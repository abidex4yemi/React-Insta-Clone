import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
import { Homepage } from './components/presentations/Homepage/Homepage';
const initialState = {
	posts: data,
	form: {
		search: '',
		comment: ''
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	inputChange = (field, value) => {
		this.setState(prevState => ({
			form: {
				...prevState.form,
				[field]: value
			}
		}));
	};

	addNewComment = () => {
		console.log('You click');
	};

	render() {
		const { posts, form } = this.state;
		return (
			<Homepage
				posts={posts}
				search={form.search}
				comment={form.comment}
				inputChange={this.inputChange}
				addNewComment={this.addNewComment}
			/>
		);
	}
}

export default App;
