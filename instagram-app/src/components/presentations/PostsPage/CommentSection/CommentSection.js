import React from 'react';
import { Comment } from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

export const CommentSection = props => {
	const { comments, handleDelete } = props;

	return (
		<div className="comments-section">
			{comments.map((comment, index) => (
				<Comment key={comment.id} {...comment} handleDelete={handleDelete} id={index} />
			))}
		</div>
	);
};

CommentSection.propTypes = {
	comments: PropTypes.array.isRequired
};
