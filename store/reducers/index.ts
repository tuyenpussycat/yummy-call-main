import { combineReducers } from "redux";
import user from "./user";
import token from "./token";

const appReducer = combineReducers({
  user,
  token,
});

export default appReducer;
