import React, { Component } from 'react';
import './Login.css';
import instagramImage from '../../assets/instagram.png';

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
			window.location.reload();
		}
	};

	render() {
		return (
			<main className="login-section">
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

						<div className="inptut-group">
							<input
								className="input"
								type="text"
								placeholder="username"
								name="username"
								onChange={evt => this.handleChange(evt)}
							/>
						</div>
						{/* {.inptut-group} */}

						<div className="inptut-group">
							<input
								className="input"
								type="password"
								name="password"
								placeholder="Password"
								onChange={evt => this.handleChange(evt)}
							/>
						</div>

						<button className="button" type="button" onClick={() => this.login()}>
							Log In
						</button>
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
				{/* {.inptut-group} */}

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
			</main>
		);
	}
}
