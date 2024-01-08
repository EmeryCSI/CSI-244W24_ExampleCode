//path helps out with path related operations
const path = require("path");
//path can get you a file extension
const ext = path.extname("example.txt");
console.log(ext);
//we get just the filename
const fileName = path.basename("example.txt");
console.log(fileName);
//There are some global objects
//__filename gives you the current fileName
console.log(__filename);
//__dirname returns the current directory
console.log(__dirname);
//These can be used with path
const fullPath = path.join(__dirname, "newFolder", "example.txt");
console.log(fullPath);
