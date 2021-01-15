import { GET_SEARCH, RESET_SEARCH } from "../constants/action-types";

export const getSearch = data => ({
  type: GET_SEARCH,
  payload: data
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});