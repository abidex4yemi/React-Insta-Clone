import React from 'react';
import './NavBar.css';
import instagramLogo from '../../assets/instagram.png';
import { SearchBar } from '../SearchBar/SearchBar';

export const NavBar = props => {
	const { search } = props;

	return (
		<header className="main-header">
			<div className="container">
				<div className="header-content">
					<a href="https://www.instagram.com" className="brand">
						<span className="logo">
							<i className="icon ion-logo-instagram" />
						</span>{' '}
						<img src={instagramLogo} alt="instagram logo" />
					</a>

					<SearchBar value={search} />
				</div>
			</div>
		</header>
	);
};
