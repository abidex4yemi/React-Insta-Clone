import React from 'react';

export const Comment = props => {
	const { username, text } = props;
	return (
		<p>
			<a href={`https://www.instagram.com/${username}`} className="username">
				@{username}
			</a>{' '}
			{text}
		</p>
	);
};
