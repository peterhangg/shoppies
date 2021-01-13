import { ADD_NOMINATION, DELETE_NOMINATION, RESET_NOMINATIONS } from "../constants/action-types";

const initialState = [];

const nominationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOMINATION:
      return [...state, action.payload];
    case DELETE_NOMINATION:
      return state.filter((nomination) => nomination.id !== action.payload);
    case RESET_NOMINATIONS:
      return [];
    default:
      return state;
  }
};

export default nominationReducer;
