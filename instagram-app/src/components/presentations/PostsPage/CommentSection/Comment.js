import React from 'react';
import PropTypes from 'prop-types';

export const Comment = props => {
	const { username, text, handleDelete, id } = props;
	return (
		<p className="comment">
			<a href={`https://www.instagram.com/${username}`} className="username">
				{username}
			</a>{' '}
			{text}
			<span className="trash-icon" onClick={() => handleDelete(id)}>
				<i className="icon ion-md-trash" />
			</span>
		</p>
	);
};

Comment.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string
};
