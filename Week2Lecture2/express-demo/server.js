//console.log("Testing");
//import the express library
const express = require("express");
const os = require("os");
//create an instance of express
const app = express();
const fs = require("fs");
const path = require("path");

//define some routes
app.get("/", (req, res) => {
  //send()
  res.send("Hello Everyone");
});
//lets send some json
app.get("/system", (req, res) => {
  res.json({
    platform: os.platform(),
    release: os.release(),
  });
});
//lets make a route that sends a file
app.get("/index", (req, res) => {
  //sendfile()
  //
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//listen on a given port
app.listen(5001, () => {
  console.log("Server running on port 5001");
});
