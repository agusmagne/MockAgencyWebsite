const mongoose = require("mongoose");
const validator = require("validator");

const user = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("User", user);
