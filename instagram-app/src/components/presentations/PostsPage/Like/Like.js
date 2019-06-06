import React from 'react';
import PropTypes from 'prop-types';

export const Like = props => {
	const { id, handleLike, likeStatus } = props;

	const style = likeStatus ? 'ion-md-heart' : 'ion-md-heart-empty';

	return (
		<button type="button" className="like" onClick={() => handleLike(id)}>
			<i className={`icon ${style}`} />
		</button>
	);
};

Like.propTypes = {
	id: PropTypes.string.isRequired,
	handleLike: PropTypes.func.isRequired
};
