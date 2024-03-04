const express = require("express");
const {
  createPost,
  getAllPosts,
  getPost,
  getPostsByUser,
  getComments,
  addComment,
} = require("../controllers/postController");
const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPosts);
//Follow a very specific naming convention for your routes
//or you will get confused
//When I am in the post routes or controller id stands for post id
//if I am in the user routes or controller id stands for user id
//if any other id is needed I name it differently
router.get("/:id", getPost);
router.get("/author/:authorId", getPostsByUser);
router.get("/comment/:id", getComments);
router.post("/comment/:id", addComment);

module.exports = router;
