import { GET_MOVIES } from "../constants/action-types";

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
    default:
      return state;
  }
};

export default getMoviesReducer;
