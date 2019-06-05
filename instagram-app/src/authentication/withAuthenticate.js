import React from 'react';

export const withAuthenticate = Component => {
	return class extends React.Component {
		render() {
			return <Component {...this.props} />;
		}
	};
};
