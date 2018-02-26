import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridTile} from 'material-ui/GridList';
import {Redirect} from 'react-router-dom';

// Redux
import { bindActionCreators } from 'redux';
import { startEditMovie, deleteMovie } from '../actions/index';
import { connect } from 'react-redux';

class MovieCard extends Component {
	state = {
		redirect: null
	};
	
	handleEdit = (e) => {
		console.log(this.props);
		let mov = {
					id: this.props.id,
					title: this.props.title,
					subtitle: this.props.subtitle,
					description: this.props.description,
					imageUrl: this.props.imageUrl
		}
				
		this.props.startEditMovie(mov);
		this.setState({redirect: "/newmovie"});
	}
	
	handleDelete = (e) => {				
		this.props.deleteMovie(this.props.id);
	}
	
	render() {
		if (this.state.redirect) {
			return <Redirect push="push" to={this.state.redirect}/>;
		}
		
		return (
			<GridTile>
				<Card className="card-body">
					<CardMedia overlay={<CardTitle title={this.props.title} subtitle={this.props.subtitle} />}>
						<img src={this.props.imageUrl} alt="" />
					</CardMedia>
					<CardText>{this.props.description}</CardText>
					<CardActions>
						<FlatButton 
							className="btn-edit" 
							label="Edit" 
							onClick={this.handleEdit}/>
						<FlatButton 
							label="Delete" 
							onClick={this.handleDelete}/>
					</CardActions>
				</Card>
			</GridTile>
		);
	}
}

function mapStateToProps(state) {
	return {
		movie: state.movie
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		startEditMovie: startEditMovie,
		deleteMovie: deleteMovie
	 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
