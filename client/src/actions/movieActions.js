import { GET_MOVIES, MOVIE_RESET } from "../constants/action-types";

export const getMovies = data => ({
  type: GET_MOVIES,
  payload: data
});

export const resetMovie = () => ({
  type: MOVIE_RESET,
});