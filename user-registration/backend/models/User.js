const mongoose = require("mongoose");

const User = mongoose.Schema({
  fname: {
    type: String,
  },
  mname: {
    type: String,
  },
  lname: {
    type: String,
  },
  birthday: {
    type: String,
  },
  age: {
    type: String,
  },
  sex: {
    type: String,
  },
  pronoun: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: String,
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  

});

module.exports = mongoose.model("User", User);
