import { SIGNUP, SIGNUP_ERROR, LOGIN } from "../actions/types";

const initialState = {
   token: localStorage.getItem("token"),
   authenticated: null,
   loading: true,
   user: null,
};

export default function (state = initialState, action) {
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

      default:
         return state;
   }
}
