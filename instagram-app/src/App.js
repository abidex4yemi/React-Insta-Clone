import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { requiresAuth } from './authentication/requiresAuth';
import { PostsPage } from './components/presentations/PostsPage/PostsPage';
import { LoginPage } from './components/presentations/LoginPage/LoginPage';
import { NotFound } from './components/presentations/NotFound/NotFound';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route exact path="/posts" component={requiresAuth(PostsPage)} />
				<Route exact component={NotFound} />
			</Switch>
		</Router>
	);
};

export default App;
