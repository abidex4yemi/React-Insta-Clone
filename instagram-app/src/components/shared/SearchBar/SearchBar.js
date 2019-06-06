import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
	padding: 1rem 0;

	& .input {
		width: 25px;
		width: 200px;
		font-size: 1.5rem;
		border: 0;
		background: #fafafa;
		border: solid 1px #dbdbdb;
		border-radius: 3px;
		color: rgb(14, 11, 11);
		cursor: text;
		font-size: 16px;
		font-weight: 300;
		padding: 7px;
		outline: 0;

		&:focus {
			border-color: #dc3545;
		}
	}
`;

export const SearchBar = props => {
	const { search, text, inputChange } = props;

	const handleValueChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;
		inputChange(field, value);
	};

	return (
		<Div>
			<input
				type={text}
				className="input"
				value={search}
				placeholder="&#128269; Search"
				onChange={evt => handleValueChange(evt)}
				name="search"
			/>
		</Div>
	);
};

SearchBar.defaultProps = {
	type: 'text'
};

SearchBar.propTypes = {
	search: PropTypes.string,
	type: PropTypes.string.isRequired,
	inputChange: PropTypes.func.isRequired
};
