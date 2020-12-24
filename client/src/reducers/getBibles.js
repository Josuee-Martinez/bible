import {
   GET_BIBLES,
   GET_BIBLES_ERROR,
   GET_BIBLE_BOOKS,
   GET_BIBLE_BOOKS_ERROR,
} from "../actions/types";

const initialState = {
   bibles: null,
   bibleBooks: null,
};

export default function (state = initialState, action) {
   const { type, payload } = action;
   switch (type) {
      case GET_BIBLES:
         return {
            ...state,
            bibles: payload,
         };
      case GET_BIBLE_BOOKS:
         // console.log(payload);
         return {
            ...state,
            bibleBooks: payload,
         };
      default:
         return state;
   }
}
