import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
	& .form {
		display: flex;
		align-items: baseline;

		& .comment-input {
			resize: none;
			width: 90%;
			border: none;
			outline: 0;
			color: #262626;
			font-size: 1.5rem;
			box-sizing: border-box;
			padding: 0 1.5rem;
		}

		& .add-comment-btn {
			border: 0;
			font-size: 1.5rem;
			text-align: center;
			color: #3897f0;
			display: inline-block;
			font-weight: bold;
			outline: 0;
		}

		& .add-comment-btn:hover {
			color: #0182fa;
			cursor: pointer;
		}
	}
`;

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
		<Div>
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
		</Div>
	);
};

Editor.propTypes = {
	addNewComment: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	inputChange: PropTypes.func.isRequired,
	comment: PropTypes.string.isRequired
};
