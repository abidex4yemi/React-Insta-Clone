import React from 'react';
import PropTypes from 'prop-types';
import './Like.css';

export const Like = props => {
	const { id, increaseLike, likeStatus } = props;

	const style = likeStatus ? 'ion-md-heart' : 'ion-md-heart-empty';

	return (
		<span className="like" onClick={() => increaseLike(id)}>
			<i className={`icon ${style}`} />
		</span>
	);
};

Like.propTypes = {
	id: PropTypes.string.isRequired,
	increaseLike: PropTypes.func.isRequired
};
