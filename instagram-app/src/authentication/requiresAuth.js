import React from 'react';

export const requiresAuth = PostsPage => {
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
			} else {
				this.props.history.push('/');
			}
		}

		render() {
			const { loggedIn } = this.state;

			return loggedIn ? <PostsPage {...this.props} /> : null;
		}
	};
};
