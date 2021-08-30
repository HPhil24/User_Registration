const mongoose = require("mongoose");

const User = mongoose.Schema({
  fname: {
    type: String,
  },
});

module.exports = mongoose.model("User", User);
