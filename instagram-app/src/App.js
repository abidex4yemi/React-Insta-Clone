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

	addNewComment = id => {
		this.setState(prevState => {
			const post = prevState.posts.map(post => {
				if (post.id === id) {
					const newComment = {
						id: post.comments.length + 1,
						username: 'who is logged in?',
						text: prevState.form.comment
					};

					post.comments.unshift(newComment);

					return post;
				}

				return post;
			});

			// Create new posts
			return {
				...prevState.posts,
				post
			};
		});
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
