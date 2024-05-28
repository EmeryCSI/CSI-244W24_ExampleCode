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
  fs.readFile(path.join(__dirname, "index.html"), "utf8", (data) => {
    res.end(data);
  });
  //lets add multiple endpoints
  //if the user goes to /about
  if (req.url === "/about") {
    //send the about.html file
    res.end("This is the about endpoint");
  }
  //if the user goes to /api
  if (req.url === "/api") {
    //Inlude a 200 status code which means everything is ok
    res.writeHead(200, { "Content-Type": "application/json" });
    //send a json object
    res.end(JSON.stringify({ name: "John Doe", age: 30 }));
  }
});
//start the server
//this server will start at localhost:portNumber
//127.0.0.1 is localhost
server.listen(3000, () => {
  console.log("Server Started on port 3000");
});
