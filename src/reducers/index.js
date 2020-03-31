import { combineReducers } from "redux";

import counter from "./counter";
import comments from "./comments";
import article from "./article";
import user from "./user";

export default combineReducers({
  counter,
  comments,
  article,
  user
});
