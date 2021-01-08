import { GET_MOVIES } from "../constants/action-types";

export const getMovies = data => ({
  type: GET_MOVIES ,
  payload: data
});