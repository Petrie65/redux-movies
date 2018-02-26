import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {Redirect} from 'react-router-dom';

// Redux
import { bindActionCreators } from 'redux';
import { finEditMovie } from '../actions/index';
import { connect } from 'react-redux';

import IconAdd from 'material-ui/svg-icons/content/add';

class BottomNav extends Component {
	state = {
		redirect: null
	};


	handleOnClick = () => {
		console.log(this.props);
		
		switch(this.props.type) {
			case "ADD" :
				this.setState({redirect: "/newmovie"});
				break;
			case "DONE" :
				this.setState({redirect: "/"});
				this.props.submitFunction();
				break;
			default:
				console.log("type doesnt exist");
		}
	}

	render() {
		if (this.state.redirect) {
			return <Redirect push="push" to={this.state.redirect}/>;
		}

		let labelText = this.props.type;

		return (
		<Paper className="bottom-nav" zDepth={1}>
			<BottomNavigation>

				<BottomNavigationItem 
					label={labelText} 
					icon={<IconAdd />} 
					onClick={this.handleOnClick}/>

			</BottomNavigation>
		</Paper>
	);
	}
}

function mapStateToProps(state) {
	return {
		form: state.form
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ finEditMovie: finEditMovie }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);
