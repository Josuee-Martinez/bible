import { combineReducers } from "redux";

import getBibles from "./getBibles";
import auth from "./auth";
import alert from "./alert";

import verseCollection from "./verseCollection";

export default combineReducers({ getBibles, auth, verseCollection, alert });
