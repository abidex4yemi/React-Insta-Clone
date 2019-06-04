import React from 'react';
import { NavBar } from '../../shared/NavBar/NavBar';
import { PostContainer } from '../PostContainer/PostContainer';
import { Footer } from '../../shared/Footer/Footer';
import './Homepage.css';

export const Homepage = props => {
	const { posts, search, comment, inputChange, addNewComment } = props;
	return (
		<React.Fragment>
			<NavBar search={search} />

			<div className="content">
				<div className="container">
					<main className="main-section">
						<section className="posts">
							{posts.map(post => (
								<PostContainer
									post={post}
									key={post.id}
									comment={comment}
									inputChange={inputChange}
									addNewComment={addNewComment}
								/>
							))}
						</section>
					</main>

					<aside className="aside">aside goes here</aside>
				</div>
			</div>

			<Footer />
		</React.Fragment>
	);
};
