import { combineReducers } from "redux";
import filterReducer from "./filter";
import todoReducer from "./todo";

const reducer = combineReducers(
  {
    todos : todoReducer,
    filter : filterReducer
  }
)

export default reducer;