const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});

module.exports = User = model("user", UserSchema);
