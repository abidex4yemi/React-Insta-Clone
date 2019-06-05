import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import uuid from 'uuid';
import './PostContainer.css';
import { Post } from '../Post/Post';

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
	const { posts, increaseLike, search } = props;

	// Instantiate new Fuse() object
	const fuse = new Fuse(posts, fuseOptions);

	// check if user input matches post data
	const data = search ? fuse.search(search) : posts;

	return (
		<section className="posts">
			{data.map(post => <Post post={post} key={uuid()} increaseLike={increaseLike} />)}
		</section>
	);
};

PostContainer.propTypes = {
	posts: PropTypes.array.isRequired,
	increaseLike: PropTypes.func.isRequired,
	search: PropTypes.string.isRequired
};
