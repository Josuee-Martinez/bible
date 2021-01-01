const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

//DB Model imports
const User = require("../models/User");

router.get("/", auth, async (req, res) => {
   try {
      const user = await User.findById(req.user.id).select("-password");
      res.json(user);
   } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
   }
});

router.post(
   "/",

   async (req, res) => {
      const { email, password } = req.body.user;

      try {
         let user = await User.findOne({ email });

         if (!user) {
            return res
               .status(400)
               .json({ errors: [{ msg: "Invalid Credentials" }] });
         }

         const isMatch = await bcrypt.compare(password, user.password);

         if (!isMatch) {
            return res
               .status(400)
               .json({ errors: [{ msg: "Invalid Credentials" }] });
         }

         const payload = {
            user: {
               id: user.id,
            },
         };

         jwt.sign(
            payload,
            config.get("jwtSecret"),
            { expiresIn: 360000 },
            (err, token) => {
               if (err) throw err;
               res.status(200).json({ token });
            }
         );
      } catch (err) {
         console.error(err.message);
         res.status(500).send("Server error");
      }
   }
);

module.exports = router;
