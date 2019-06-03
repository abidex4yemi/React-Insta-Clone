import React from 'react';
import { CommentSection } from '../CommentSection/CommentSection';

export const PostContainer = props => {
	const { comments } = props;

	return <CommentSection comments={comments} />;
};
