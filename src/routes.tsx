import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Usuario from './Pages/Usuario';
import NotFound from './Pages/NotFoundPage';

const routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/Home">
					<Home />
				</Route>
				<Route path="/Usuario">
					<Usuario />
				</Route>
				<Route path="/NotFoundPage">
					<NotFound />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default routes;
