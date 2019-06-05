import React from 'react';
import PropTypes from 'prop-types';
import './Like.css';

export const Like = props => {
	const { id, handleLike, likeStatus } = props;

	const style = likeStatus ? 'ion-md-heart' : 'ion-md-heart-empty';

	return (
		<span className="like" onClick={() => handleLike(id)}>
			<i className={`icon ${style}`} />
		</span>
	);
};

Like.propTypes = {
	id: PropTypes.string.isRequired,
	handleLike: PropTypes.func.isRequired
};
