const { Router } = require("express");
const router = Router();

const axios = require("axios");

router.get("/", async (req, res) => {
   try {
      const config = {
         headers: {
            "api-key": process.env.API_KEY,
         },
      };
      const axiosRes = await axios.get(
         "https://api.scripture.api.bible/v1/bibles",
         config
      );

      res.json(axiosRes.data);
   } catch (error) {
      console.error(error);
   }
});

router.get("/:bibleId/books", async (req, res) => {
   try {
      const config = {
         headers: {
            "api-key": process.env.API_KEY,
         },
      };
      const axiosRes = await axios.get(
         `https://api.scripture.api.bible/v1/bibles/${req.params.bibleId}/books`,
         config
      );

      res.json(axiosRes.data);
   } catch (error) {
      console.error(error);
   }
});

router.get("/:bibleId/book/:bibleBookId", async (req, res) => {
   try {
      const config = {
         headers: {
            "api-key": process.env.API_KEY,
         },
      };
      const axiosRes = await axios.get(
         `https://api.scripture.api.bible/v1/bibles/${req.params.bibleId}/books/${req.params.bibleBookId}/chapters`,

         config
      );

      res.json(axiosRes.data);
   } catch (error) {
      console.error(error);
   }
});

router.get("/:bibleId/chapter/:chapterId", async (req, res) => {
   try {
      const config = {
         headers: {
            "api-key": process.env.API_KEY,
         },
      };
      const axiosRes = await axios.get(
         `https://api.scripture.api.bible/v1/bibles/${req.params.bibleId}/chapters/${req.params.chapterId}`,

         config
      );

      res.json(axiosRes.data);
   } catch (error) {
      console.error(error);
   }
});

module.exports = router;
