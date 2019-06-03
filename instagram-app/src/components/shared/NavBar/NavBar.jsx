import React from 'react';
import './NavBar.css';
import instagramLogo from '../../assets/instagram.png';
import instagramIcon from '../../assets/ionicons_svg_logo-instagram.svg';
import { SearchBar } from '../SearchBar/SearchBar';

export const NavBar = props => {
	const { search } = props;

	return (
		<header className="main-header">
			<div className="container">
				<div className="header-content">
					<a href="https://www.instagram.com" className="brand">
						<img className="logo" src={instagramIcon} alt="instagram icon" />
						<img src={instagramLogo} alt="instagram logo" className="instagram-image" />
					</a>

					<SearchBar value={search} />

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
				</div>
			</div>
		</header>
	);
};
