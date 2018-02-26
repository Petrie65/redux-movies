import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import Router from './router';

/**
 * ReactDOM.render method is going render all the React
 * components into the root DOM element in your index.html
 * page located in your public folder
 */
ReactDOM.render(

	// The provider wrapper is where we connect
	// Redux which is handling you application state.
	// App is the main React component
	// We wrap the app with MuiThemeProvider for the material-ui components
	<Provider store={store}>
		<MuiThemeProvider>
			{Router}
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
