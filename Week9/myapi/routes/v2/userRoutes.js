const express = require("express");
const router = express.Router();
const userController = require("../../controllers/v2/userController");

router.get("/users", userController.getUsers);

module.exports = router;
