import React from 'react';
import PropTypes from 'prop-types';
import { CommentSection } from '../CommentSection/CommentSection';
import './PostContainer.css';

export const PostContainer = props => {
	const { post } = props;

	return (
		<div className="post">
			<header className="post-header">
				<img src={post.thumbnailUrl} alt={post.username} className="user-thumbnail" />
				<p className="username">{post.username}</p>
			</header>
			<div className="post-body">
				<a href={`https://www.instagram.com/${post.username}`}>
					<img src={post.imageUrl} alt="Post img" />
				</a>
				<div className="action-icons">
					<span className="like">
						<i className="icon ion-md-heart" />
					</span>
					<span className="comment">
						<i className="icon ion-md-text" />
					</span>
					<span className="share">
						<i className="icon ion-md-share-alt" />
					</span>

					<a href="#!" className="bookmark">
						<i className="icon ion-md-bookmark" />
					</a>
				</div>
				<CommentSection comments={post.comments} />
			</div>
			<footer className="post-footer">
				<div className="form-container">Add comments form goes here</div>
			</footer>
		</div>
	);
};

PostContainer.propTypes = {
	post: PropTypes.object.isRequired,
	CommentSection: PropTypes.element
};
