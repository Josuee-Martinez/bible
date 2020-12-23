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

module.exports = router;
