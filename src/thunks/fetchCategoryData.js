import {
	isLoading,
	getAllMovies,
	throwError
} from '../actions';
import {
	cleanCategoryMovies
} from '../utils/cleanerFunction';

export const fetchCategoryData = url => {
	console.log(url)
	return async dispatch => {
		try {
			dispatch(isLoading(true));
			const response = await fetch(url);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const data = await response.json();
			const movieData = data.results;
			const movies = await cleanCategoryMovies(movieData);
			dispatch(getAllMovies(movies));
			dispatch(isLoading(false));
		} catch (error) {
			dispatch(throwError(error));
		}
	};
};