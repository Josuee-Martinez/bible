require("dotenv").config();

//express imports
const express = require("express");
const app = express();

app.use("/bibles", require("./controllers/bibleController"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("express server is running on port 5000"));
