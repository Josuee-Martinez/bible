import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

import {
   SIGNUP,
   SIGNUP_ERROR,
   LOGIN,
   LOGIN_ERROR,
   LOAD_USER,
   LOAD_USER_ERROR,
   LOGOUT,
} from "./types";

export const loadUser = () => async (dispatch) => {
   if (localStorage.token) {
      setAuthToken(localStorage.token);
   }

   try {
      const res = await axios.get("http://localhost:5000/api/auth");
      dispatch({ type: LOAD_USER, payload: res.data });
   } catch (error) {
      dispatch({ type: LOAD_USER_ERROR });
   }
};

export const signup = (user) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   try {
      const res = await axios.post(
         "http://localhost:5000/api/user",
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
         "http://localhost:5000/api/auth",
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

export const logout = () => (dispatch) => {
   dispatch({ type: LOGOUT });
};
