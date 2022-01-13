import incrementDecrement from "./Reducer1";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  incrementDecrement,
});

export default rootReducer;
