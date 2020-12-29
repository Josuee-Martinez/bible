import { combineReducers } from "redux";

import getBibles from "./getBibles";
import auth from "./auth";

export default combineReducers({ getBibles, auth });
