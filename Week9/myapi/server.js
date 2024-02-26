//bring in .env
require("dotenv").config();
//express, mongoose, helmet, rateLimit
const express = require("express");
const mongoose = require("mongoose");
//helmet provides some easy built in security options
const helmet = require("helmet");
//rateLimit will limit the number of requests a user can make
const rateLimit = require("express-rate-limit");
//add cors
const cors = require("cors");
//adding our custom middleware
const apiKeyMiddleware = require("./middleware/apiKeyMiddleware");
//adding the routes
const v1UserRoutes = require("./routes/v1/userRoutes");
const v2UserRoutes = require("./routes/v2/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

//create a limit
const limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs or 100 requests per 15 minutes
});

//This is the middleware
//remember that middleware is software that runs between the request and the response
//it can be used to modify the request or the response
app.use(express.json());
app.use(limit);
app.use(helmet());
app.use(cors());
//using the middleware globally
// app.use(apiKeyMiddleware);
//bring in the routes
//we now have two different versions of the API
app.use("/api/v1", v1UserRoutes);
app.use("/api/v2", v2UserRoutes);
//Other Techniques for API Versioning
/*
https://www.xmatters.com/blog/blog-four-rest-api-versioning-strategies
*/

//normally here we use mongoose to connect to our database
//but in this tutorial we do not need a database

app.get("/", (req, res) => {
  res.send("Hello World");
});

// This is a protected route requiring the API_KEY
app.get("/api/protected", apiKeyMiddleware, (req, res) => {
  res.json({ message: "This is a protected route." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
