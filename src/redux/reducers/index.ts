import { combineReducers } from "redux";
import handleUsers from "./user.reducers";
import handleAuth from "./auth.reducers";

const rootReducers = combineReducers({
  handleUsers,
  handleAuth
})

export default rootReducers