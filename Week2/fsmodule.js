//fs is used to manage files in node
const fs = require("fs");

//writeFile take 3 arguments
//first is filename
//second is the data to be written
//3rd is a callback function
fs.writeFile("example.txt", "Hello Node!", (error) => {
  //if you take in a parameter to the callback function
  //it will be the error message if any
  if (error) {
    console.log(error);
  }
  console.log("File Written");
});

//readfile works similarly to writefile
fs.readFile("example.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
