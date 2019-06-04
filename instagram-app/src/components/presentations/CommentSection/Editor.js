import React from 'react';

export const Editor = props => {
	const { comment, inputChange, addNewComment } = props;

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
				<button className="add-comment-btn" type="button" onClick={addNewComment}>
					Post
				</button>
			</form>
		</div>
	);
};
