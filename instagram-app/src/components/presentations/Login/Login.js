import React, { Component } from 'react';

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				username: '',
				password: ''
			}
		};
	}

	render() {
		return <div>login page</div>;
	}
}
