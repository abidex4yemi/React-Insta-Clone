import React from 'react';
import { PostsPage } from '../components/presentations/PostsPage/PostsPage';
import { LoginPage } from '../components/presentations/LoginPage/LoginPage';

const withAuthenticate = PostsPage => {
	return LoginPage => {
		return class extends React.Component {
			constructor(props) {
				super(props);
				this.state = {
					loggedIn: false
				};
			}

			componentDidMount() {
				if (localStorage.hasOwnProperty('loggedIn')) {
					let value = localStorage.getItem('loggedIn');

					// parse the localStorage string and setState
					try {
						value = JSON.parse(value);
						this.setState(prevState => ({
							loggedIn: value
						}));
					} catch (e) {
						this.setState(prevState => ({
							loggedIn: value
						}));
					}
				}
			}

			render() {
				const { loggedIn } = this.state;
				if (loggedIn) {
					return <PostsPage {...this.props} />;
				}

				return <LoginPage {...this.props} />;
			}
		};
	};
};

export default withAuthenticate(PostsPage)(LoginPage);
