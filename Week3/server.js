//import express
const express = require("express");
const fs = require("fs");
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

//lets make an endpoitn that fires on /register
app.get("/register", (req, res) => {
  //infomration that comes via a GET request is located in the req.query object
  //res.send(req.query);
  console.log(req.query);
  //I want the save the user data in a registrations.json
  //check if the file exists already
  const filePath = __dirname + "/registrations.json";
  if (fs.existsSync(filePath)) {
    //read the registrations data from the file
    const registrations = JSON.parse(fs.readFileSync(filePath));
    //add the new registration push
    registrations.push(req.query);
    //write the updated file
    fs.writeFileSync(filePath, JSON.stringify(registrations));
  } else {
    //create a new array of objects from req.query
    const registrations = [req.query];
    //write the regiratraions
    fs.writeFileSync(filePath, JSON.stringify(registrations));
  }
  res.sendFile(__dirname + "/public/registrations.html");
});

app.get("/view-registrations", (req, res) => {
  res.sendFile(__dirname + "/public/registrations.html");
});

app.get("/registrations", (req, res) => {
  //send the json file as a response
  res.sendFile(__dirname + "/registrations.json");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
