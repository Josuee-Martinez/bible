import { SET_ALERT, REMOVE_ALERT } from "./types";
import * as uuid from "uuid";

export const setAlert = (msg, alertType) => (dispatch) => {
   const id = uuid.v4();
   dispatch({ type: SET_ALERT, payload: { msg, alertType, id } });

   setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 4000);
};

export const remove = (e) => (dispatch) => {
   console.log(e.target.parentElement.parentElement.parentElement);
   e.target.parentElement.parentElement.parentElement.style.display = "none";
};
