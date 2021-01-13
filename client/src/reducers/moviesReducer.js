import { GET_MOVIES, MOVIE_RESET } from "../constants/action-types";

// Default state matches gql query response
const initialState = {
  movieState: {
    loading: false,
    data: {
      movies: [],
    },
    error: null,
  },
};

const getMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { movieState: action.payload };
    case MOVIE_RESET:
      return { movieState: { ...state.movieState, data: { movies: [] } } };
    default:
      return state;
  }
};

export default getMoviesReducer;
