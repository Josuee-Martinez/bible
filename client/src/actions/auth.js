import axios from "axios";

import { SIGNUP, SIGNUP_ERROR, LOGIN, LOGIN_ERROR } from "./types";

export const signup = (user) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   try {
      const res = await axios.post(
         "http://localhost:5000/user/signup",
         user,
         config
      );

      dispatch({ type: SIGNUP, payload: res.data });
   } catch (err) {
      dispatch({
         type: SIGNUP_ERROR,
      });
   }
};

export const login = (user) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   try {
      const res = await axios.post(
         "http://localhost:5000/user/login",
         user,
         config
      );

      dispatch({ type: LOGIN, payload: res.data });
   } catch (err) {
      dispatch({
         type: LOGIN_ERROR,
      });
   }
};
