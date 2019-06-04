import React from 'react';
import PropTypes from 'prop-types';
import './Editor.css';

/**
 * 
 * @param {Object} props 
 */
export const Editor = props => {
	const { comment, inputChange, addNewComment, id } = props;

	const handleValueChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;
		inputChange(field, value);
	};

	const handleOnEnterPress = evt => {
		if (evt.keyCode === 13 && evt.shiftKey === false) {
			evt.preventDefault();
			addNewComment(id);
		}
	};

	return (
		<div className="form-container">
			<form className="form">
				<textarea
					className="comment-input"
					placeholder="Add a comment..."
					name="comment"
					value={comment}
					onChange={evt => handleValueChange(evt)}
					onKeyDown={evt => handleOnEnterPress(evt)}
				/>
				<button className="add-comment-btn" type="button" onClick={() => addNewComment(id)}>
					Post
				</button>
			</form>
		</div>
	);
};

Editor.propTypes = {
	addNewComment: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	inputChange: PropTypes.func.isRequired,
	comment: PropTypes.string.isRequired
};
