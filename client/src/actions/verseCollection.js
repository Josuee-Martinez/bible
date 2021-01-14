import axios from "axios";
import { setAlert } from "./alert";

import {
   SAVE_VERSE,
   SAVE_VERSE_ERROR,
   GET_USER_VERSES,
   GET_USER_VERSES_ERROR,
   GET_VERSE_BY_ID,
   GET_VERSE_BY_ID_ERROR,
   GET_VERSE_VERSION,
   GET_VERSE_VERSION_ERROR,
   DELETE_VERSE,
   FILTERED_VERSE,
   CLEAR_FILTERED_VERSE,
} from "./types";

export const saveVerse = (verseToSave) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   try {
      const res = await axios.post(
         "http://localhost:5000/api/verse",
         verseToSave,
         config
      );
      dispatch({ type: SAVE_VERSE, payload: res.data });
      dispatch(getUserVerses());
   } catch (error) {
      dispatch({ type: SAVE_VERSE_ERROR });
   }
};

export const getUserVerses = () => async (dispatch) => {
   try {
      const res = await axios.get("http://localhost:5000/api/verse");
      dispatch({ type: GET_USER_VERSES, payload: res.data });
   } catch (error) {
      dispatch({ type: GET_USER_VERSES_ERROR });
   }
};

export const getVerseById = (id) => async (dispatch) => {
   try {
      const res = await axios.get(`http://localhost:5000/api/verse/${id}`);
      dispatch({ type: GET_VERSE_BY_ID, payload: res.data });
   } catch (error) {
      dispatch({ type: GET_VERSE_BY_ID_ERROR });
   }
};

export const getVerseByVersion = (bibleId, verseId) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/api/verse/${bibleId}/verse/${verseId}`
      );

      dispatch({ type: GET_VERSE_VERSION, payload: res.data });
   } catch (error) {
      error.response.data.errors.forEach((err) =>
         dispatch(setAlert(err.msg, "error"))
      );

      dispatch({
         type: GET_VERSE_VERSION_ERROR,
      });
      // console.log(err);
   }
};

export const deleteVerse = (history, id) => async (dispatch) => {
   try {
      const res = await axios.delete(`http://localhost:5000/api/verse/${id}`);

      dispatch({ type: DELETE_VERSE, payload: res.data });
      dispatch(setAlert("Verse was removed", "error"));
      history.push("/account");
   } catch (error) {
      console.log(error);
   }
};

export const filteredVerses = (str) => async (dispatch) => {
   dispatch({ type: FILTERED_VERSE, payload: str });
};

export const clearFilteredVerses = () => async (dispatch) => {
   dispatch({ type: CLEAR_FILTERED_VERSE });
};
