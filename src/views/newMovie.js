import React, {Component} from 'react';

// Redux
import {bindActionCreators} from 'redux';
import {addMovie, finEditMovie} from '../actions/index';
import {connect} from 'react-redux';

// Componets
import NavBar from '../components/navBar';
import BottomNav from '../components/bottomNav';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const paperStyle = {
	height: '100%',
	width: '96%',
	margin: 20,
	textAlign: 'center',
	display: 'inline-block',
	padding: 30
};


class NewMovie extends Component {
	addMovie() { 
		if (this.props.editingMovie) { // Edit movie
			this.props.finEditMovie(this.props.editingMovie.id, this.getInput());
		} else { // Add movie
			this.props.addMovie(this.getInput());
		}
	}

	getInput() {
		return {
				title: this.refs.title.input.value,
				subtitle: this.refs.subtitle.input.value,
				description: this.refs.description.input.value,
				imageUrl: this.refs.url.input.value
		};
	}

	render() {
		let mov = this.props.editingMovie;
		
		const titleDef = mov ? mov.title : "";
		const subDef = mov ? mov.subtitle : "";
		const descDef = mov ? mov.description : "";
		const urlDef = mov ? mov.imageUrl : "http://lorempixel.com/400/200/";
		
		return (
			
			<div>
				<NavBar/>

				<div>
					<Paper style={paperStyle} zDepth={3}>

						<p>Movie</p>

						<TextField ref="title" defaultValue={titleDef} floatingLabelText="Title"/><br/>
						<TextField ref="subtitle" defaultValue={subDef} floatingLabelText="Subtitle"/><br/>
						<TextField ref="description" defaultValue={descDef} floatingLabelText="Description"/><br/>
						<TextField ref="url" defaultValue={urlDef} floatingLabelText="Image URL"/><br/>

					</Paper>
				</div>

				<BottomNav type="DONE" submitFunction={(e) => this.addMovie()}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		editingMovie: state.editingMovie
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addMovie,
		finEditMovie
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
