import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Editor } from '../CommentSection/Editor';

const Footer = styled.footer`
	border-top: 1px solid #dbdbdb;
	text-align: center;
	padding-top: 10px;
`;

export const PostFooter = props => {
	const { comment, inputChange, addNewComment, id } = props;

	return (
		<Footer className="post-footer">
			<Editor comment={comment} inputChange={inputChange} addNewComment={addNewComment} id={id} />
		</Footer>
	);
};

PostFooter.propTypes = {
	comment: PropTypes.string,
	inputChange: PropTypes.func.isRequired,
	addNewComment: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired
};
