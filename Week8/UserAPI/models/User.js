//create a model
//A model is just a javascript blueprint for an entry in a datbase
const mongoose = require("mongoose");

//I am going to define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
