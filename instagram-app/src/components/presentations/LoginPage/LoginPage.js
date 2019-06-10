import React, { Component } from 'react';
import styled from 'styled-components';
import { TextInput } from './layout/TextInput';
import { ButtonComponent } from './layout/ButtonComponent';
import instagramImage from '../../assets/instagram.png';

const Main = styled.main`
	width: 400px;
	margin: 100px auto;
	font-size: 1.5rem;

	& .login-form-container {
		display: block;
		width: 350px;
		height: 400px;
		background: #fff;
		border: 1px solid #e6e6e6;
		text-align: center;
	}

	& .logo-container {
		text-align: center;
		padding-top: 10px;
		margin-bottom: 40px;

		& img {
			width: 200px;
			height: 80px;
		}
	}

	& .action-container {
		text-align: center;
		margin: 20px 0;

		& .login {
			background-image: url('https://img.icons8.com/color/48/000000/facebook.png');
			background-repeat: no-repeat;
			background-size: 25px;
			height: 25px;
			width: 150px;
			margin: 0 auto;
			padding-left: 30px;
			text-align: left;

			& img {
				width: 25px;
				height: 25px;
			}
		}

		& a {
			text-decoration: none;
			display: block;
			margin-bottom: 10px;
			color: #0078e0;
		}
	}

	& .dont-have-account {
		width: 350px;
		height: 70px;
		background: #fff;
		border: 1px solid #e6e6e6;
		text-align: center;
		margin: 20px 0;

		& p {
			margin-top: 25px;
		}

		& a {
			text-decoration: none;
			color: #0078e0;
		}
	}

	& .app p {
		text-align: center;
		margin: 15px 0;
	}

	& .app-link-container {
		width: 350px;
		display: flex;
		justify-content: space-between;

		& .btn {
			background: #262626;
			color: #fff;
			width: 150px;
			height: 40px;
			border: 0;
			border: 1px solid #262626;
			cursor: pointer;
		}

		& .apple-store,
		& .play-store {
			border-radius: 5px;
			display: flex;
			justify-content: space-around;
		}

		& .apple-store .fab {
			font-size: 30px;
		}

		& .play-store .fab {
			font-size: 30px;
			color: #05dbf2;
		}
	}
`;

export class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				username: '',
				password: ''
			}
		};
	}

	inputChange = (field, value) => {
		this.setState(prevState => ({
			form: {
				...prevState.form,
				[field]: value
			}
		}));
	};

	handleChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;
		this.inputChange(field, value);
	};

	login = () => {
		const { username } = this.state.form;
		if (username.trim() !== '') {
			localStorage.setItem('username', JSON.stringify(username));
			localStorage.setItem('loggedIn', JSON.stringify(true));
			this.props.history.push('/posts');
		}
	};

	render() {
		return (
			<Main>
				<div className="login-form-container">
					<form
						action=""
						onSubmit={evt => {
							evt.preventDefault();
							this.login();
						}}
					>
						<div className="logo-container">
							<img src={instagramImage} alt="Instagram logo" />
						</div>

						<TextInput type="text" placeholder="username" name="username" onChange={evt => this.handleChange(evt)} />

						<TextInput
							type="password"
							name="password"
							placeholder="Password"
							onChange={evt => this.handleChange(evt)}
						/>

						<ButtonComponent type="button" onClick={() => this.login()} buttonText="Log In" />
					</form>

					<div className="action-container">
						<a href="#!" className="login">
							Login with facebook
						</a>
						<a href="#!" className="forgot-password">
							Forgot password?
						</a>
					</div>
				</div>

				<div className="dont-have-account">
					<p>
						Dont have an account? <a href="#!">Sign up</a>
					</p>
				</div>

				<div className="app">
					<p>Get the app.</p>
				</div>

				<div className="app-link-container">
					<button type="button" className="btn apple-store">
						<div className="icon-container">
							<i className="fab fa-apple" />
						</div>
						<div>
							<p>Dowload on the</p>
							<p>App Store</p>
						</div>
					</button>
					<button type="button" className="btn play-store">
						<div className="icon-container">
							<i className="fab fa-google-play" />
						</div>
						<div>
							<p>GET IT ON</p>
							<p>Google Play</p>
						</div>
					</button>
				</div>
			</Main>
		);
	}
}
