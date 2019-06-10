import React from 'react';
import { Comment } from './Comment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
	padding: 0.5em 1.5rem;

	& .comment {
		font-size: 1.6rem;
		line-height: 1.5;

		&:hover .trash-icon {
			display: inline-block;
		}
	}

	& .comment .username {
		text-decoration: none;
		font-weight: bold;
		color: #262626;
	}

	& .comment .trash-icon {
		color: #dc3545;
		padding: 0 10px;
		display: none;
		transition: 0.2s;
		cursor: pointer;
	}
`;

export const CommentSection = props => {
	const { comments, handleDelete } = props;

	return (
		<Div className="comments-section">
			{comments.map((comment, index) => (
				<Comment key={comment.id} {...comment} handleDelete={handleDelete} id={index} />
			))}
		</Div>
	);
};

CommentSection.propTypes = {
	comments: PropTypes.array.isRequired
};
