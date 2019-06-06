import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
	padding-top: 10rem;
	font-size: 2rem;
	text-align: center;
	color: #2b2f3b;

	p {
		margin-bottom: 5rem;
	}

	a {
		color: #fff;
		text-decoration: none;
		background: #2b2f3b;
		border: 1px solid #2b2f3b;
		padding: 20px;
	}
`;

export const NotFound = () => {
	return (
		<div className="container">
			<Div>
				<h1>404 Page not found</h1>
				<p>Sorry, that page does not exist.</p>
				<Link to="/">Back to home</Link>
			</Div>
		</div>
	);
};
