import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.header`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	line-height: 1.5;

	& .user-thumbnail {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1px solid #dbdbdb;
		padding: 0.2rem;
	}

	& .username {
		font-size: 2rem;
		margin: 1rem;
	}
`;
export const PostHeader = props => {
	const { thumbnailUrl, username } = props;

	return (
		<Header>
			<img src={thumbnailUrl} alt={username} className="user-thumbnail" />
			<p className="username">{username}</p>
		</Header>
	);
};

PostHeader.propTypes = {
	thumbnailUrl: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
};
