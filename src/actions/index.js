export function startEditMovie(movie) {
	console.log("edit movie action called");
	return {
		type: 'START_EDIT_MOVIE',
		payload: movie
	}
}

export function finEditMovie(editID, newMovie) {
	console.log("edit movie action called");
	return {
		type: 'FIN_EDIT_MOVIE',
		payload: {
			editID: editID,
			newMovie : newMovie
		}
	}
}

export function addMovie(movie) {
	console.log("add new movie action called + " + movie);
	return {
		type: 'ADD_MOVIE',
		payload: movie
	}
}

export function deleteMovie(movie) {
	console.log("delete movie action called + " + movie);
	return {
		type: 'DELETE_MOVIE',
		payload: movie
	}
}
