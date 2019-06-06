import React, { Component } from 'react';
import styled from 'styled-components';
import { data } from '../../../data/data';
import { NavBar } from '../../shared/NavBar/NavBar';
import { PostContainer } from './PostContainer/PostContainer';
import { Footer } from '../../shared/Footer/Footer';

const Div = styled.div`
	padding-top: 20rem;
	background-color: #fafafa;

	& .container {
		display: flex;
		justify-content: space-between;

		& .main-section {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 60%;
		}

		& .aside {
			width: 35%;
		}
	}
`;

const initialState = {
	posts: [],
	form: {
		search: ''
	}
};

export class PostsPage extends Component {
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
				if (localStorage.hasOwnProperty(key) && localStorage.getItem(key)) {
					let value = localStorage.getItem(key);

					// parse the localStorage string and setState
					try {
						value = JSON.parse(value);
						this.setState(prevState => ({ [key]: value }));
					} catch (e) {
						this.setState(prevState => ({ [key]: value }));
					}
				} else {
					this.getPosts(data).then(posts =>
						this.setState(prevState => ({
							posts
						}))
					);
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
		// get post id from url
		const { id } = this.props.match.params;
		let posts;

		if (id) {
			posts = this.state.posts.filter(post => post.id === id);
		} else {
			posts = this.state.posts;
		}

		const { search } = this.state.form;

		return (
			<React.Fragment>
				<NavBar search={search} inputChange={this.inputChange} />

				<Div className="content">
					<div className="container">
						<main className="main-section">
							{!posts.length ? (
								<div>No post available.</div>
							) : (
								<PostContainer posts={posts} handleLike={this.handleLike} search={search} />
							)}
						</main>

						<aside className="aside">
							Aside goes here
							<Footer />
						</aside>
					</div>
				</Div>
			</React.Fragment>
		);
	}
}
