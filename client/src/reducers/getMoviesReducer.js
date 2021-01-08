import { GET_MOVIES } from "../constants/action-types";

const initialState = {
  movies: [],
  loading: false,
  error: null
};

const getMoviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIES:
      return { movieState: action.payload }
    default:
      return state;
  }
}

export default getMoviesReducer;