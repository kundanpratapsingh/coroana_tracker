import { combineReducers } from "redux";
import datareducer from "./dataReducers";

const rootReducer = combineReducers({
  data: datareducer,
});

export default rootReducer;
