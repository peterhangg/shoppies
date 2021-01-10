import { GET_SEARCH } from "../constants/action-types";

export const getSearch = data => ({
  type: GET_SEARCH,
  payload: data
});