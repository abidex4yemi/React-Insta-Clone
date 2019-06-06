import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import instagramLogo from '../../assets/instagram.png';
import instagramIcon from '../../assets/ionicons_svg_logo-instagram.svg';
import { SearchBar } from '../SearchBar/SearchBar';

const Header = styled.header`
	background: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
	position: fixed;
	z-index: 500;
	width: 100%;
	padding: 10px 20px;
	box-sizing: border-box;
`;

const Div = styled.div`
	display: flex;
	justify-content: space-between;

	& .brand {
		display: block;
		color: #262626;

		& img {
			display: inline-block;
			padding: 0 0.5em;
		}

		& .instagram-image {
			width: 100px;
			border-left: 0.5px solid #262626;
			height: 40px;
		}

		& .logo {
			width: 40px;
		}
	}

	& .action-bar-container {
		padding: 1rem 0;

		& span {
			display: inline-block;
			margin: 0 1rem;
		}

		& .icon {
			font-size: 2.5rem;
		}

		& .like .icon {
			color: #dc3545;
		}
	}
`;

export const NavBar = props => {
	const { search, inputChange } = props;

	return (
		<Header>
			<div className="container">
				<Div>
					<a href="https://www.instagram.com" className="brand">
						<img className="logo" src={instagramIcon} alt="instagram icon" />
						<img src={instagramLogo} alt="instagram logo" className="instagram-image" />
					</a>

					<SearchBar value={search} inputChange={inputChange} />

					<div className="action-bar-container">
						<span className="explore">
							<i className="icon ion-md-compass" />
						</span>
						<span className="like">
							<i className="icon ion-md-heart-empty" />
						</span>
						<span className="user">
							<i className="icon ion-md-person" />
						</span>
					</div>
				</Div>
			</div>
		</Header>
	);
};

NavBar.propTypes = {
	search: PropTypes.string,
	inputChange: PropTypes.func.isRequired
};
