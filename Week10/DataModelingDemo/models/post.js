const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
  datePosted: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  //This is the author of the post, it is a reference to the User model
  //It is not embedded within the post, but rather a reference.
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  datePosted: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  //This is the comments of the post, it is embedded within the post
  comments: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
