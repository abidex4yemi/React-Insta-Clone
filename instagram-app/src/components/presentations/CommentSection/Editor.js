import React from 'react';
import './Editor.css';
import PropTypes from 'prop-types';

export const Editor = props => {
	const { comment, inputChange, addNewComment, id } = props;

	const handleValueChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;
		inputChange(field, value);
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
				/>
				<button className="add-comment-btn" type="button" onClick={() => addNewComment(id)}>
					Post
				</button>
			</form>
		</div>
	);
};

Editor.propTypes = {
	comment: PropTypes.string.isRequired,
	inputChange: PropTypes.func.isRequired,
	addNewComment: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired
};
