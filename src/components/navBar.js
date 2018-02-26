import React, { Component } from 'react';

// App bar
import AppBar from 'material-ui/AppBar';
import {Redirect} from 'react-router-dom';

import IconHome from 'material-ui/svg-icons/action/home';

const iconStyle = {
	width: 200
}

class NavBar extends Component {
	state = {
		redirect: false
	};

	handleOnClick = () => {
		this.setState({redirect: true});
	}
	
	render() {
		if (this.state.redirect) {
			this.setState({redirect: false});
			return <Redirect push="push" to="/"/>;
		}

		return (
		  <AppBar
			  onLeftIconButtonClick={this.handleOnClick}
			  iconElementLeft={<IconHome />}
			  iconStyleLeft={iconStyle}
		  />
			
		)
	}
}

export default NavBar;
