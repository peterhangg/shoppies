import { combineReducers } from "redux";
import getMoviesReducer from "./getMoviesReducer";
import nominationsReducer from "./nominationsReducer";
import getSearchReducer from "./getSearchReducer";

const rootReducer = combineReducers({
  getMoviesReducer,
  nominationsReducer,
  getSearchReducer
});

export default rootReducer;
