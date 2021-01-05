import { combineReducers } from "redux";
import AddReducer from "./addReducer";

const rootReducer = combineReducers({
  addHistoryList: AddReducer
});

export default rootReducer;
