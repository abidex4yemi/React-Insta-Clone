import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
import { PostContainer } from './components/PostContainer/PostContainer';
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

		return (
			<React.Fragment>
				<header>
					<div className="container">
						<div className="header-content">header content goes here.</div>
					</div>
				</header>

				<main class="main-section">
					<div className="container">
						<section className="posts">{posts.map(post => <PostContainer post={post} key={post.id} />)}</section>
					</div>
				</main>

				<footer className="main-footer">
					<div className="container">footer content goes here</div>
				</footer>
			</React.Fragment>
		);
	}
}

export default App;
