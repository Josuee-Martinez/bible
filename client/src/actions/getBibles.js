import axios from "axios";

import {
   GET_BIBLES,
   GET_BIBLES_ERROR,
   GET_BIBLE_BOOKS,
   GET_BIBLE_BOOKS_ERROR,
   GET_BIBLE_BOOK_CHAPTERS,
   GET_BIBLE_BOOK_CHAPTERS_ERROR,
   GET_SINGLE_CHAPTER,
   GET_SINGLE_CHAPTER_ERROR,
   GET_CHAPTER_VERSE,
   GET_CHAPTER_VERSE_ERROR,
} from "./types";

export const getBibles = () => async (dispatch) => {
   try {
      const res = await axios.get("http://localhost:5000/bibles");

      dispatch({ type: GET_BIBLES, payload: res.data });
   } catch (err) {
      dispatch({
         type: GET_BIBLES_ERROR,
      });
   }
};

export const getBibleBooks = (bibleId) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/bibles/${bibleId}/books`
      );

      dispatch({ type: GET_BIBLE_BOOKS, payload: res.data });
   } catch (err) {
      dispatch({
         type: GET_BIBLE_BOOKS_ERROR,
      });
   }
};

export const getBibleBookChapters = (bibleId, bibleBookId) => async (
   dispatch
) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/bibles/${bibleId}/book/${bibleBookId}`
      );

      dispatch({ type: GET_BIBLE_BOOK_CHAPTERS, payload: res.data });
   } catch (err) {
      dispatch({
         type: GET_BIBLE_BOOK_CHAPTERS_ERROR,
      });
   }
};

export const getSingleChapter = (bibleId, chapterId) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/bibles/${bibleId}/chapter/${chapterId}`
      );

      dispatch({ type: GET_SINGLE_CHAPTER, payload: res.data });
   } catch (err) {
      dispatch({
         type: GET_SINGLE_CHAPTER_ERROR,
      });
   }
};

export const getChapterVerse = (bibleId, verseId) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/bibles/${bibleId}/verse/${verseId}`
      );

      dispatch({ type: GET_CHAPTER_VERSE, payload: res.data });
   } catch (err) {
      dispatch({
         type: GET_CHAPTER_VERSE_ERROR,
      });
   }
};
