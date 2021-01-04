require("dotenv").config();

//express imports
const express = require("express");
const app = express();

const connectDB = require("./config/db");

app.use(express.json({ extended: false }));

connectDB();

app.use(require("./middleware/headers"));

app.use("/api/bibles", require("./controllers/bibleController"));
app.use("/api/user", require("./controllers/userController"));
app.use("/api/auth", require("./controllers/authController"));
app.use("/api/verse", require("./controllers/verseCollectionController"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("express server is running on port 5000"));
