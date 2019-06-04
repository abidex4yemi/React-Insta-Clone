import React from 'react';
import PropTypes from 'prop-types';
import { CommentSection } from '../CommentSection/CommentSection';
import { Editor } from '../CommentSection/Editor';
import './PostContainer.css';

export const PostContainer = props => {
	const { post, comment, inputChange, addNewComment } = props;

	return (
		<article className="post">
			<header className="post-header">
				<img src={post.thumbnailUrl} alt={post.username} className="user-thumbnail" />
				<p className="username">{post.username}</p>
			</header>
			<div className="post-body">
				<div className="image-container">
					<img src={post.imageUrl} alt="Post img" />
				</div>
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
				<Editor comment={comment} inputChange={inputChange} addNewComment={addNewComment} id={post.id} />
			</footer>
		</article>
	);
};

PostContainer.propTypes = {
	post: PropTypes.object.isRequired,
	CommentSection: PropTypes.element
};
