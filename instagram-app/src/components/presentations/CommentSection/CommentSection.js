import React from 'react';
import { Comment } from './Comment';
import PropTypes from 'prop-types';

export const CommentSection = props => {
	const { comments } = props;

	return <div className="comments-section">{comments.map(comment => <Comment key={comment.id} {...comment} />)}</div>;
};

CommentSection.propTypes = {
	comments: PropTypes.array.isRequired
};
