// State argument is not application state, only the state this reducer is responsible for


export default function(state = {
	movies: [],
	editingMovie: null,
	IDcount: 0
}, action) {
	
	switch(action.type) {
		case 'ADD_MOVIE':
			action.payload.id = state.IDcount++;
			return {
				...state,
				movies: state.movies.concat(action.payload)
			}
			
		case 'START_EDIT_MOVIE':
			return {
				...state,
				editingMovie: action.payload				
			}
			
		case 'FIN_EDIT_MOVIE':	
			let newMovs = [];
			
			for (var x=0; x<state.movies.length; x++) {
				if (state.movies[x].id === action.payload.editID) {
					console.log("editing movie " + action.payload.editID);
					newMovs.push(action.payload.newMovie);
				} else {
					newMovs.push(state.movies[x]);
				}
			}

			return {
				...state,
				movies: newMovs,
				editingMovie: null
			}
			
		case 'DELETE_MOVIE':
			let delMovs = [];
			
			for (var y=0; y<state.movies.length; y++) {
				if (state.movies[y].id !== action.payload) {
					delMovs.push(state.movies[y]);
				}
			}
			
			return {
				...state,
				movies: delMovs
			}	
			
		default :
			console.log("Does not exist");
	}
	return state;
}
