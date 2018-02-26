import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Grid
import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

// Componets
import NavBar from '../components/navBar';
import BottomNav from '../components/bottomNav';
import MovieCard from '../components/movieCard';

// Style
import styles from '../styles/movie-list.css';

class AllMovies extends Component {
	
	renderMovies() {
		return this.props.movies.map((movie) => {
			return (
				<MovieCard 
					key={movie.key}
					id={movie.id}
					title={movie.title} 
					subtitle={movie.subtitle}
					description={movie.description}
					imageUrl={movie.imageUrl}
				/>
			)
		})
	}

	
	render() {
		let movieList = <div></div>;
		if (this.props.movies.length > 0) {
			console.log("movies exist");
			movieList = this.renderMovies();
		}
		
		return (
			<div>
				<NavBar />


				<div className='movie-list' style={styles.root}>
					<GridList
						cols={3}
						cellHeight={500}
						style={styles.gridList}
					>
						<Subheader>All Movies</Subheader>

						{movieList}

					</GridList>
				</div>

				<BottomNav type="ADD" />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		movies: state.movies
	};
}

export default connect(mapStateToProps)(AllMovies);
