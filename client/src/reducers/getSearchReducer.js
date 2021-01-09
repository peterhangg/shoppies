import { GET_SEARCH } from "../constants/action-types";

const initialState = "";

const getSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default getSearchReducer;