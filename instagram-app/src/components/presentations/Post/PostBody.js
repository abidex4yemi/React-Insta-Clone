import React from 'react';
import PropTypes from 'prop-types';
import { CommentSection } from '../CommentSection/CommentSection';

export const PostBody = props => {
	const { imageUrl, increaseLikes, likes, comments, id } = props;

	return (
		<div className="post-body">
			<div className="image-container">
				<img src={imageUrl} alt="Post img" />
			</div>
			<div className="action-icons">
				<span className="like" onClick={() => increaseLikes(id)}>
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
			<div className="total-likes">
				<p>
					<span className="likes-count">{likes}</span> likes
				</p>
			</div>
			<CommentSection comments={comments} />
		</div>
	);
};

PostBody.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	increaseLikes: PropTypes.func.isRequired,
	likes: PropTypes.number.isRequired,
	comments: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired
};
