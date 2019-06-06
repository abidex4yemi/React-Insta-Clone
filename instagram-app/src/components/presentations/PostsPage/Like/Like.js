import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
	border: 0;
	outline: 0;

	& .icon {
		color: #dc3545;
	}
`;

export const Like = props => {
	const { id, handleLike, likeStatus } = props;

	const style = likeStatus ? 'ion-md-heart' : 'ion-md-heart-empty';

	return (
		<Button type="button" onClick={() => handleLike(id)}>
			<i className={`icon ${style}`} />
		</Button>
	);
};

Like.propTypes = {
	id: PropTypes.string.isRequired,
	handleLike: PropTypes.func.isRequired
};
