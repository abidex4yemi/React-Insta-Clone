import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from '../../shared/NavBar/NavBar';
import { PostContainer } from './PostContainer/PostContainer';
import { Footer } from '../../shared/Footer/Footer';
import './PostsPage.css';

export const PostsPage = props => {
	const { posts, search, handleLike, inputChange } = props;

	return (
		<React.Fragment>
			<NavBar search={search} inputChange={inputChange} />

			<div className="content">
				<div className="container">
					<main className="main-section">
						{!posts.length ? (
							<div>No post available.</div>
						) : (
							<PostContainer posts={posts} handleLike={handleLike} search={search} />
						)}
					</main>

					<aside className="aside">
						Aside goes here
						<Footer />
					</aside>
				</div>
			</div>
		</React.Fragment>
	);
};

PostsPage.propTypes = {
	posts: PropTypes.array.isRequired,
	search: PropTypes.string.isRequired,
	handleLike: PropTypes.func.isRequired
};
