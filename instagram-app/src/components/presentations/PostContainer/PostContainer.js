import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import './PostContainer.css';
import { Post } from '../Post/Post';

export const PostContainer = props => {
	const { posts } = props;

	return <section className="posts">{posts.map(post => <Post post={post} key={uuid()} />)}</section>;
};

PostContainer.propTypes = {
	posts: PropTypes.array.isRequired
};
