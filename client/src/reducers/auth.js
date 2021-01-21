import {
   SIGNUP,
   SIGNUP_ERROR,
   LOGIN,
   LOAD_USER,
   LOAD_USER_ERROR,
   LOGOUT,
} from "../actions/types";

const initialState = {
   token: localStorage.getItem("token"),
   authenticated: null,
   loading: true,
   user: null,
};

const auth = (state = initialState, action) => {
   const { type, payload } = action;
   switch (type) {
      case SIGNUP:
      case LOGIN:
         console.log(payload);
         localStorage.setItem("token", payload.token);
         return {
            ...state,
            ...payload,
            authenticated: true,
            loading: false,
         };
      case SIGNUP_ERROR:
         return {
            ...state,
         };
      case LOAD_USER:
         return {
            ...state,
            authenticated: true,
            loading: false,
            user: payload,
         };
      case LOGOUT:
      case LOAD_USER_ERROR:
         localStorage.removeItem("token");
         return {
            ...state,
            token: null,
            authenticated: false,
            loading: false,
         };
      default:
         return state;
   }
};

export default auth;
