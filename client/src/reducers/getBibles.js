import {
   GET_BIBLES,
   GET_BIBLES_ERROR,
   GET_BIBLE_BOOKS,
   GET_BIBLE_BOOKS_ERROR,
   GET_BIBLE_BOOK_CHAPTERS,
   GET_BIBLE_BOOK_CHAPTERS_ERROR,
   GET_SINGLE_CHAPTER,
} from "../actions/types";

const initialState = {
   bibles: null,
   bibleBooks: null,
   bibleBookChapters: null,
   chapter: null,
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
         return {
            ...state,
            bibleBooks: payload,
         };
      case GET_BIBLE_BOOK_CHAPTERS:
         // console.log(payload);
         return {
            ...state,
            bibleBookChapters: payload,
         };
      case GET_SINGLE_CHAPTER:
         console.log(payload.data);
         return {
            ...state,
            chapter: payload,
         };
      default:
         return state;
   }
}
