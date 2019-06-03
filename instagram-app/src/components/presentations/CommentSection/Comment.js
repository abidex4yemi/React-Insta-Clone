import React from 'react';
import PropTypes from 'prop-types';

export const Comment = props => {
	const { username, text } = props;
	return (
		<p className="comment">
			<a href={`https://www.instagram.com/${username}`} className="username">
				{username}
			</a>{' '}
			{text}
		</p>
	);
};

Comment.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};
