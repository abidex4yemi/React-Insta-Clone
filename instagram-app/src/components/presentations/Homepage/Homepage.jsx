import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from '../../shared/NavBar/NavBar';
import { PostContainer } from '../PostContainer/PostContainer';
import { Footer } from '../../shared/Footer/Footer';
import './Homepage.css';

export const Homepage = props => {
	const { posts, search } = props;

	return (
		<React.Fragment>
			<NavBar search={search} />

			<div className="content">
				<div className="container">
					<main className="main-section">
						{!posts.length ? <div>No post available.</div> : <PostContainer posts={posts} />}
					</main>

					<aside className="aside">aside goes here</aside>
				</div>
			</div>

			<Footer />
		</React.Fragment>
	);
};

Homepage.propTypes = {
	posts: PropTypes.array.isRequired,
	search: PropTypes.string.isRequired
};
