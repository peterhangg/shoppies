import { GET_SEARCH, RESET_SEARCH } from "../constants/action-types";

const initialState = "";

const getSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return action.payload;
    case RESET_SEARCH:
      return "";
    default:
      return state;
  }
};

export default getSearchReducer;