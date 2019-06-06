import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`margin-bottom: 10px;`;
const Button = styled.button`
	width: 270px;
	padding: 0 8px;
	height: 40px;
	background: #3d9df2;
	border: 0;
	border: 1px solid #3d9df2;
	box-sizing: border-box;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	outline: 0;
	font-size: 1.8rem;
	font-weight: bold;

	&:hover {
		background: #0078e0;
		border-color: #0078e0;
	}
`;

export const ButtonComponent = props => {
	const { type, buttonText, onClick } = props;

	return (
		<Div>
			<Button type={type} onClick={onClick}>
				{buttonText}
			</Button>
		</Div>
	);
};

ButtonComponent.defaultProps = {
	type: 'button'
};

ButtonComponent.propTypes = {
	type: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
