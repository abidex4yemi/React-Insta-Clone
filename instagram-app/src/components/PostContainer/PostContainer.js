import React from 'react';
import { CommentSection } from '../CommentSection/CommentSection';

export const PostContainer = props => {
	const { post } = props;

	return <CommentSection comments={post.comments} />;
};
