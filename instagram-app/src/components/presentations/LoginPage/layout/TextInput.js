import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`margin-bottom: 10px;`;

const Input = styled.input`
	border: 0;
	border: 1px solid #f2f2f2;
	height: 40px;
	width: 270px;
	background: #f2f2f28f;
	border-radius: 3px;
	padding: 5px 8px;
	outline: 0;
	box-sizing: border-box;

	&:focus {
		border-color: #f29f05;
	}

	&[placeholder] {
		font-size: 15px;
	}
`;

export const TextInput = props => {
	const { type, placeholder, name, onChange } = props;

	return (
		<Div>
			<Input type={type} placeholder={placeholder} name={name} onChange={onChange} />
		</Div>
	);
};

TextInput.defaultProps = {
	type: 'text'
};

TextInput.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};
