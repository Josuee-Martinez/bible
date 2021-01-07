const { Router } = require("express");
const router = Router();
const config = require("config");
const auth = require("../middleware/auth");
const axios = require("axios");

const VerseCollection = require("../models/VerseCollection");

//Save verse to database
router.post("/", auth, async (req, res) => {
   const { verseId, verseReference, verseText } = req.body.verseToSave;

   try {
      const verse = new VerseCollection({
         verseId,
         verseReference,
         verseText,
         user: req.user.id,
      });

      const newVerse = await verse.save();
      res.json(newVerse);
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
   }
});

//Get all verses for current user
router.get("/", auth, async (req, res) => {
   try {
      const verse = await VerseCollection.find({ user: req.user.id }).exec();
      res.json(verse);
   } catch (error) {
      console.error(error);
      res.status(500).send("server error");
   }
});

//Get single verse by id
router.get("/:id", auth, async (req, res) => {
   try {
      const verse = await VerseCollection.findById(req.params.id).exec();
      res.json(verse);
   } catch (error) {
      console.error(error);
      res.status(500).send("server error");
   }
});

//Get verse in different versions
router.get("/:bibleId/verse/:verseId", auth, async (req, res) => {
   try {
      const config = {
         headers: {
            "api-key": process.env.API_KEY,
         },
      };
      const axiosRes = await axios.get(
         `https://api.scripture.api.bible/v1/bibles/${req.params.bibleId}/verses/${req.params.verseId}?content-type=json`,

         config
      );

      res.json(axiosRes.data);
   } catch (err) {
      res.status(404).json({ errors: [{ msg: err.response.data.message }] });
      // console.error({ err: [{ msg: error.response.data.message }] });
      console.error(err);
   }
});

router.delete("/:id", auth, async (req, res) => {
   try {
      const verse = await VerseCollection.findById(req.params.id);

      if (!verse) {
         return res.status(404).json({ msg: "verse not found" });
      }

      await verse.remove();

      res.json({ msg: "verse removed" });
   } catch (error) {
      console.error(error);
   }
});

module.exports = router;
