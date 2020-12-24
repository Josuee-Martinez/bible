import axios from "axios";

import {
   GET_BIBLES,
   GET_BIBLES_ERROR,
   GET_BIBLE_BOOKS,
   GET_BIBLE_BOOKS_ERROR,
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
