// The controller sits in between the View and the Model
// In a web API you can think of this as sitting between
// the request and the model

//pull in the User model
const User = require("../models/User");

//lets make a function that returns all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//this is going to be hit with a post request
const createUser = async (req, res) => {
  //create a new user from the body of the request
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
  });
  console.log("working");
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllUsers, createUser };
