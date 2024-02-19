//lets bring in express and fs
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
//were gonna use a few different middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());
//after the middleware and before listen() we define endpoints
//what kind of request should send all of the tasks
app.get("/tasks", (req, res) => {
  console.log("GET tasks");
  fs.readFile(__dirname + "/data/taskList.json", "utf8", (err, data) => {
    //send the data to the client
    res.send(data);
  });
});

const port = 3001;
//listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
