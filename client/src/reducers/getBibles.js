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
   verseContent: null,
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
         sessionStorage.setItem("bibleBooks", JSON.stringify(payload));
         return {
            ...state,
            bibleBooks: payload,
         };
      case GET_BIBLE_BOOK_CHAPTERS:
         sessionStorage.setItem("bibleChapters", JSON.stringify(payload));
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
      default:
         return state;
   }
}
