//http module is used to set up a webserver
const http = require("http");
//lets start a webserver
//#1 create a variable using http.createServer()
//#2 tell the server to listen on a port
//The callback function will get a request (req)
//and a response (res)
//req is how you find out about what the user is asking for
//res is how you send the user information
// const server = http.createServer((req, res) => {
//   //send a text response
//   res.end("Hello Node");
// });
//to send an html file we need the fs libary and the path
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  //we need to read the index.html file
  fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
    res.end(data);
  });
});
//start the server
//this server will start at localhost:portNumber
//127.0.0.1 is localhost
server.listen(3000, () => {
  console.log("Server Started on port 3000");
});
