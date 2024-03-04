const mongoose = require("mongoose");
//define the schema
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
});
//create the model
const User = mongoose.model("User", userSchema);
//export the model
module.exports = User;
