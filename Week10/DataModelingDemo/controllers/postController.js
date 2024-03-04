const Post = require("../models/post");

//create a post
const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get all posts by all users
//since posts also has comments embedded
const getAllPosts = async (req, res) => {
  try {
    //when loading data from a reference, you can also load the related
    //data from the reference
    //Here we are including the author of the post
    //This requires a seperate query to the database
    //Notice how we do not have to do this to include the comments
    //They come automatically since they are embedded
    const posts = await Post.find().populate("author");
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author");
    res.send(post);
  } catch (error) {
    res.status(500).send;
  }
};

//get all posts by a specific user
//This requires an authorId is sent as a parameter
const getPostsByUser = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.authorId });
    res.send(posts);
  } catch (error) {
    res.status;
  }
};

//get only the comments of a post
//This takes a post id and returns the comments of the post
const getComments = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post.comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

//where should I handle adding a comment?
//This takes a post id and adds a comment to the post
const addComment = async (req, res) => {
  try {
    console.log(req.body);
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  getPostsByUser,
  getComments,
  addComment,
};
