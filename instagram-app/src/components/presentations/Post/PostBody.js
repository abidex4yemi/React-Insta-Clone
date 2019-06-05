import React from 'react';
import PropTypes from 'prop-types';
import { CommentSection } from '../CommentSection/CommentSection';
import { Like } from '../Like/Like';

export const PostBody = props => {
	const { imageUrl, likes, comments, id, increaseLike, likeStatus } = props;

	return (
		<div className="post-body">
			<div className="image-container">
				<img src={imageUrl} alt="Post img" />
			</div>
			<div className="action-icons">
				<Like id={id} increaseLike={increaseLike} likeStatus={likeStatus} />
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
	likes: PropTypes.number.isRequired,
	comments: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	increaseLike: PropTypes.func.isRequired,
	likeStatus: PropTypes.bool.isRequired
};
