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
      const res = await axios.get("http://localhost:5000/api/bibles");

      dispatch({ type: GET_BIBLES, payload: res.data });
   } catch (error) {
      dispatch({
         type: GET_BIBLES_ERROR,
         payload: error,
      });
   }
};

export const getBibleBooks = (bibleId) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/api/bibles/${bibleId}/books`
      );

      dispatch({ type: GET_BIBLE_BOOKS, payload: res.data });
   } catch (error) {
      dispatch({
         type: GET_BIBLE_BOOKS_ERROR,
         payload: error,
      });
   }
};

export const getBibleBookChapters = (bibleId, bibleBookId) => async (
   dispatch
) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/api/bibles/${bibleId}/book/${bibleBookId}`
      );

      dispatch({ type: GET_BIBLE_BOOK_CHAPTERS, payload: res.data });
   } catch (error) {
      dispatch({
         type: GET_BIBLE_BOOK_CHAPTERS_ERROR,
         payload: error,
      });
   }
};

export const getSingleChapter = (bibleId, chapterId) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/api/bibles/${bibleId}/chapter/${chapterId}`
      );

      dispatch({ type: GET_SINGLE_CHAPTER, payload: res.data });
   } catch (error) {
      dispatch({
         type: GET_SINGLE_CHAPTER_ERROR,
         payload: error,
      });
   }
};

export const getChapterVerse = (bibleId, verseId) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/api/bibles/${bibleId}/verse/${verseId}`
      );

      dispatch({ type: GET_CHAPTER_VERSE, payload: res.data });
   } catch (error) {
      dispatch({
         type: GET_CHAPTER_VERSE_ERROR,
         payload: error,
      });
   }
};
