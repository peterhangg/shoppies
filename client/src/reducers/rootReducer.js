import { combineReducers } from "redux";
import getMoviesReducer from "./moviesReducer";
import nominationsReducer from "./nominationsReducer";
import getSearchReducer from "./searchReducer";

const rootReducer = combineReducers({
  getMoviesReducer,
  nominationsReducer,
  getSearchReducer
});

export default rootReducer;
