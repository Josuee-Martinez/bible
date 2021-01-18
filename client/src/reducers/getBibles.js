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
   GET_SINGLE_CHAPTER_ERROR,
} from "../actions/types";

const initialState = {
   bibles: null,
   bibleBooks: null,
   bibleBookChapters: null,
   chapter: null,
   nextChapter: null,
   previousChapter: null,
   verse: null,
   verseContent: null,
   error: null,
};

export default function (state = initialState, action) {
   const { type, payload } = action;
   switch (type) {
      case GET_BIBLES:
         return {
            ...state,
            bibles: payload,
         };
      case GET_BIBLES_ERROR:
         console.log(payload);
         return {
            ...state,
            error: payload,
         };
      case GET_BIBLE_BOOKS:
         sessionStorage.setItem("bibleBooks", JSON.stringify(payload));
         return {
            ...state,
            bibleBooks: payload,
         };
      case GET_BIBLE_BOOKS_ERROR:
         return {
            ...state,
            error: payload,
         };
      case GET_BIBLE_BOOK_CHAPTERS:
         sessionStorage.setItem("bibleChapters", JSON.stringify(payload));
         return {
            ...state,
            bibleBookChapters: payload,
         };
      case GET_BIBLE_BOOK_CHAPTERS_ERROR:
         return {
            ...state,
            error: payload,
         };
      case GET_SINGLE_CHAPTER:
         // console.log(payload.data);
         sessionStorage.setItem("chapter", JSON.stringify(payload));
         sessionStorage.setItem(
            "nextChapter",
            JSON.stringify(payload.data.next)
         );
         sessionStorage.setItem(
            "previousChapter",
            JSON.stringify(payload.data.previous)
         );
         return {
            ...state,
            chapter: payload,
            nextChapter: payload.data.next,
            previousChapter: payload.data.previous,
         };
      case GET_SINGLE_CHAPTER_ERROR:
         return {
            ...state,
            error: payload,
         };
      case GET_CHAPTER_VERSE:
         // console.log(payload.data.content[0].items[1]);
         console.log(payload);
         return {
            ...state,
            verse: payload,
            verseContent: payload.data.content[0].items
               .map((p) => (p.name === "char" ? p.items[0].text : p.text))
               .filter((item) => item !== undefined)
               .join(""),
         };
      case GET_CHAPTER_VERSE_ERROR:
         return {
            ...state,
            error: payload,
         };
      default:
         return state;
   }
}
