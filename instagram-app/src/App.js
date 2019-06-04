import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
import { Homepage } from './components/presentations/Homepage/Homepage';
import uuid from 'uuid';
const initialState = {
	posts: [],
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

	addNewComment = id => {
		this.setState(prevState => {
			const post = prevState.posts.map(post => {
				if (post.id === id) {
					const newComment = {
						id: uuid(),
						username: 'who is logged in?',
						text: prevState.form.comment
					};

					if (post.comments) {
						post.comments.unshift(newComment);
					}

					if (!post.comments) {
						post.comments.unshift([newComment]);
					}

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
