import React from 'react';
import './SearchBar.css';

export const SearchBar = props => {
	const { search, text } = props;

	return (
		<div className="input-group">
			<input type={text} className="input" value={search} placeholder="&#128269; Search" />
		</div>
	);
};

SearchBar.defaultProps = {
	text: 'text'
};
