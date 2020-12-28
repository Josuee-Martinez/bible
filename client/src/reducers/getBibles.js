import {
   GET_BIBLES,
   GET_BIBLES_ERROR,
   GET_BIBLE_BOOKS,
   GET_BIBLE_BOOKS_ERROR,
   GET_BIBLE_BOOK_CHAPTERS,
   GET_BIBLE_BOOK_CHAPTERS_ERROR,
   GET_SINGLE_CHAPTER,
   GET_CHAPTER_VERSE,
   GET_CHAPTER_VERSE_ERROR,
} from "../actions/types";

const initialState = {
   bibles: null,
   bibleBooks: null,
   bibleBookChapters: null,
   chapter: null,
   nextChapter: null,
   previousChapter: null,
   verse: null,
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
            nextChapter: payload.data.next,
            previousChapter: payload.data.previous,
         };
      case GET_CHAPTER_VERSE:
         console.log(payload.data.content[0].items[1]);
         return {
            ...state,
            verse: payload,
         };
      default:
         return state;
   }
}
