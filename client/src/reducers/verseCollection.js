import {
   SAVE_VERSE,
   SAVE_VERSE_ERROR,
   GET_USER_VERSES,
   GET_USER_VERSES_ERROR,
   GET_VERSE_BY_ID,
   GET_VERSE_BY_ID_ERROR,
} from "../actions/types";

const initialState = {
   verse: null,
   userVerses: null,
   singleVerse: null,
};

export default function (state = initialState, action) {
   const { type, payload } = action;
   switch (type) {
      case SAVE_VERSE:
         console.log(payload);

         return {
            ...state,
            verse: payload,
         };
      case SAVE_VERSE_ERROR:
         return {
            ...state,
         };
      case GET_USER_VERSES:
         return {
            ...state,
            userVerses: payload,
         };
      case GET_VERSE_BY_ID:
         return {
            ...state,
            singleVerse: payload,
         };
      default:
         return state;
   }
}
