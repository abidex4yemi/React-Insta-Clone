import React from 'react';
import PropTypes from 'prop-types';

export const PostHeader = props => {
	const { thumbnailUrl, username } = props;

	return (
		<header className="post-header">
			<img src={thumbnailUrl} alt={username} className="user-thumbnail" />
			<p className="username">{username}</p>
		</header>
	);
};

PostHeader.propTypes = {
	thumbnailUrl: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
};
