const { Schema, model } = require("mongoose");

const VerseCollectionSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: "user",
   },
   verseId: {
      type: String,
      required: true,
      unique: true,
   },
   verseReference: {
      type: String,
      required: true,
   },
   verseText: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});

module.exports = VerseCollection = model(
   "verseCollection",
   VerseCollectionSchema
);
