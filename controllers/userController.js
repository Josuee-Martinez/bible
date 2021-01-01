const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

//DB Model imports
const User = require("../models/User");

//signup route
router.post("/", async (req, res) => {
   const { email, username, password } = req.body.user;

   try {
      let user = await User.findOne({ email });

      if (user) {
         return res
            .status(400)
            .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
         email,
         username,
         password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

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
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
   }
});

module.exports = router;
