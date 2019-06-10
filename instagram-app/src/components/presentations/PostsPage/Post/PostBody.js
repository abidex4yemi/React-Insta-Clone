import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { CommentSection } from '../CommentSection/CommentSection';
import { Like } from '../Like/Like';

const Div = styled.div`
	& .image-container img {
		width: 100%;
	}

	& .action-icons {
		display: flex;
		padding: 0.5em 1.5rem;

		& .icon {
			font-size: 3rem;
			cursor: pointer;
		}

		& .bookmark {
			margin-left: auto;
			color: #262626;
		}

		& .comment,
		& .share {
			margin-left: 1rem;
			color: #262626;
			border: 0;
			outline: 0;
		}
	}

	& .total-likes {
		color: #262626;
		font-size: 1.3rem;
		font-weight: bold;
		padding: 0.5em 1.5rem;
	}

	& .last-comment-date {
		font-size: 1.5rem;
		color: #beb9b9;
		font-weight: 400;
		padding: 0.5em 1.5rem;
	}
`;
export const PostBody = props => {
	const { imageUrl, likes, comments, id, handleLike, likeStatus, handleDelete, timestamp } = props;

	const day = moment(new Date(timestamp.replace('th', ''))).fromNow();

	return (
		<Div>
			<Link to={`/single-post/${id}`} className="image-container">
				<img src={imageUrl} alt="Post img" />
			</Link>
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
		</Div>
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
