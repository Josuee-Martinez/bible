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
      // const errors = err.msg;

      error.response.data.error.forEach((erro) =>
         dispatch(setAlert(erro.msg, "danger"))
      );

      dispatch({
         type: GET_VERSE_VERSION_ERROR,
      });
      // console.log(err);
   }
};
