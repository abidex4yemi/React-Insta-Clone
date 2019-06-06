import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { CommentSection } from '../CommentSection/CommentSection';
import { Like } from '../Like/Like';

export const PostBody = props => {
	const { imageUrl, likes, comments, id, handleLike, likeStatus, handleDelete, timestamp } = props;

	const day = moment(new Date(timestamp.replace('th', ''))).fromNow();

	return (
		<div className="post-body">
			<div className="image-container">
				<img src={imageUrl} alt="Post img" />
			</div>
			<div className="action-icons">
				<Like id={id} handleLike={handleLike} likeStatus={likeStatus} />
				<button type="button" className="comment">
					<i className="icon ion-md-text" />
				</button>
				<button type="button" className="share">
					<i className="icon ion-md-share-alt" />
				</button>
				<a href="#!" className="bookmark">
					<i className="icon ion-md-bookmark" />
				</a>
			</div>
			<div className="total-likes">
				<p>
					<span className="likes-count">{likes}</span> likes
				</p>
			</div>
			<CommentSection comments={comments} handleDelete={handleDelete} />
			<div className="last-comment-date">
				<time title={day}>{day}</time>
			</div>
		</div>
	);
};

PostBody.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	comments: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	handleLike: PropTypes.func.isRequired,
	likeStatus: PropTypes.bool.isRequired,
	timestamp: PropTypes.string.isRequired
};
