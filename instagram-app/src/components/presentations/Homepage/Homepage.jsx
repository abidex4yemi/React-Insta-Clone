import React from 'react';
import { NavBar } from '../../shared/NavBar/NavBar';
import { PostContainer } from '../PostContainer/PostContainer';
import { Footer } from '../../shared/Footer/Footer';

export const Homepage = props => {
	const { posts } = props;
	return (
		<React.Fragment>
			<NavBar />

			<div className="content">
				<div className="container">
					<main className="main-section">
						<section className="posts">{posts.map(post => <PostContainer post={post} key={post.id} />)}</section>
					</main>

					<aside>aside goes here</aside>
				</div>
			</div>

			<Footer />
		</React.Fragment>
	);
};
