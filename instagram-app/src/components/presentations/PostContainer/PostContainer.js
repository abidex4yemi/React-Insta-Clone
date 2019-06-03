import React from 'react';
import { CommentSection } from '../CommentSection/CommentSection';

export const PostContainer = props => {
	const { post } = props;

	return (
		<div className="post">
			<header className="post-header">
				<img src={post.thumbnailUrl} alt={post.username} className="user-thumbnail" />
			</header>
			<div className="post-body">
				<figure>
					<img src={post.imageUrl} alt="Post img" />
				</figure>
				<div className="action-icons">icons goes here</div>
				<CommentSection comments={post.comments} />
			</div>
			<footer>
				<div className="form-container">Add comments form goes here</div>
			</footer>
		</div>
	);
};
