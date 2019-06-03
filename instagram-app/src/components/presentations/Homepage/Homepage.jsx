import React from 'react';
import { NavBar } from '../../shared/NavBar/NavBar';
import { PostContainer } from '../../containers/PostContainer/PostContainer';

export const Homepage = props => {
	const { posts } = props;
	return (
		<React.Fragment>
			<NavBar />

			<div class="content">
				<div className="container">
					<main className="main-section">
						<section className="posts">{posts.map(post => <PostContainer post={post} key={post.id} />)}</section>
					</main>

					<aside>aside goes here</aside>
				</div>
			</div>

			<footer className="main-footer">
				<div className="container">footer content goes here</div>
			</footer>
		</React.Fragment>
	);
};
