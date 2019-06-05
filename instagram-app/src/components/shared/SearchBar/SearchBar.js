import React from 'react';
import './SearchBar.css';

export const SearchBar = props => {
	const { search, text, inputChange } = props;

	const handleValueChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;
		inputChange(field, value);
	};

	return (
		<div className="input-group">
			<input
				type={text}
				className="input"
				value={search}
				placeholder="&#128269; Search"
				onChange={evt => handleValueChange(evt)}
				name="search"
			/>
		</div>
	);
};

SearchBar.defaultProps = {
	text: 'text'
};
