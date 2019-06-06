import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import uuid from 'uuid';
import { Post } from '../Post/Post';

const Section = styled.section`
	.posts {
		display: flex;
		flex-wrap: wrap;
		width: 650px;
	}
`;

// field to use for search
const keys = {
	USERNAME: 'username'
};

const { USERNAME } = keys;

// fuse.js search options
const fuseOptions = {
	shouldSort: true,
	threshold: 0.4,
	location: 0,
	distance: 50,
	maxPatternLength: 12,
	minMatchCharLength: 3,
	keys: [USERNAME]
};

export const PostContainer = props => {
	const { posts, handleLike, search } = props;

	// Instantiate new Fuse() object
	const fuse = new Fuse(posts, fuseOptions);

	// check if user input matches post data
	const data = search ? fuse.search(search) : posts;

	return <Section>{data.map(post => <Post post={post} key={uuid()} handleLike={handleLike} />)}</Section>;
};

PostContainer.propTypes = {
	posts: PropTypes.array.isRequired,
	handleLike: PropTypes.func.isRequired,
	search: PropTypes.string.isRequired
};
