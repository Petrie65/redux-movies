import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AllMovies from './views/allMovies';
import NewMovie from './views/newMovie';

// We are using React Router DOM v4
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

/**
 * Router
 * Routes and views to render
 */
const Router = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={AllMovies} />
			<Route path="/newmovie" component={NewMovie} />
		</Switch>
	</BrowserRouter>

)

	// Export component
	export default Router;
