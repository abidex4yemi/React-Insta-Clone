import React from 'react';
import { Comment } from './Comment';

export const CommentSection = props => {
	const { comments } = props;

	return <div className="comments-section">{comments.map(comment => <Comment key={comment.id} {...comment} />)}</div>;
};
