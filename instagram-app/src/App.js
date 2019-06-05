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

			return reject(new Error('Fail importing post data'));
		});
	};

	increaseLike = id => {
		this.setState(prevState => {
			const { posts } = prevState;

			const allPost = posts.map(post => {
				if (post.id === id) {
					if (post.likeStatus) {
						return {
							...post,
							likes: post.likes - 1,
							likeStatus: !post.likeStatus
						};
					} else {
						return {
							...post,
							likes: post.likes + 1,
							likeStatus: !post.likeStatus
						};
					}
				}

				return post;
			});

			return {
				posts: allPost
			};
		});
	};

	componentDidMount() {
		this.getPosts(data).then(posts => this.setState({ posts }));
	}

	render() {
		const { posts, form } = this.state;
		return <Homepage posts={posts} search={form.search} increaseLike={this.increaseLike} />;
	}
}

export default App;
