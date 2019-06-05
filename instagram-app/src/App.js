import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
import { PostsPage } from './components/presentations/PostsPage/PostsPage';
import { withAuthenticate } from './authentication/withAuthenticate';
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);
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

	inputChange = (field, value) => {
		this.setState(prevState => ({
			form: {
				...prevState.form,
				[field]: value
			}
		}));
	};

	handleLike = id => {
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
		this.setStateWithLocalStorage();

		/**
		 *  Add event listener to save state to localStorage when user leaves/refreshes the page
		 *  
		 */
		window.addEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));

		// saves if component has a chance to un mount
		this.saveStateToLocalStorage();
	}

	setStateWithLocalStorage() {
		const state = this.state;
		for (let key in state) {
			if (key !== 'form') {
				if (localStorage.hasOwnProperty(key)) {
					let value = localStorage.getItem(key);

					// parse the localStorage string and setState
					try {
						value = JSON.parse(value);
						this.setState({ [key]: value });
					} catch (e) {
						this.setState({ [key]: value });
					}
				} else {
					this.getPosts(data).then(posts => this.setState({ posts }));
				}
			}
		}
	}

	saveStateToLocalStorage() {
		const state = this.state;
		for (let key in state) {
			if (key !== 'form') {
				localStorage.setItem(key, JSON.stringify(this.state[key]));
			}
		}
	}

	render() {
		const { posts, form } = this.state;
		return (
			<ComponentFromWithAuthenticate
				posts={posts}
				search={form.search}
				handleLike={this.handleLike}
				inputChange={this.inputChange}
			/>
		);
	}
}

export default App;
