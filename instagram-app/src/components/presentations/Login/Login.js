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

	inputChange = (field, value) => {
		this.state(prevState => ({
			form: {
				...prevState.form,
				[field]: value
			}
		}));
	};

	render() {
		return <div>login page</div>;
	}
}
