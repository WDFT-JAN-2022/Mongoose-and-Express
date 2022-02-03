const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Craft the Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favoriteIceCream: {
    type: String,
    enum: ["vanilla", "chocolate", "strawberry"],
    default: "vanilla",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Model
const User = mongoose.model("User", userSchema);

module.exports = User;
