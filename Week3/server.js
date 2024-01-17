//import express
const express = require("express");
const app = express();

//lets make an endpoint at /
app.get("/", (req, res) => {
  //lets send an html file from this endpoint
  res.sendFile(__dirname + "/public/index.html");
});

//lets make an endpoint at /registration-form
app.get("/registration-form", (req, res) => {
  res.sendFile(__dirname + "/public/registration-form.html");
});

//lets make an endpoint at /view-registrations
app.get("/view-registrations", (req, res) => {
  res.send("View Registration Working");
});

//lets make an endpoitn that fires on /register
app.get("/register", (req, res) => {
  //infomration that comes via a GET request is located in the req.query object
  res.send(req.query);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
