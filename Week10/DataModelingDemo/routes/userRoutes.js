const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:email", getUser);

module.exports = router;
