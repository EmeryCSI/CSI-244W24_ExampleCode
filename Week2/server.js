//In node the main module is called server.js
console.log("Hello World");
//I want to encrypt some strings and display them
//Lets make a module that encrypts
//Before I can use a module I have to bring it in with require
const encryption = require("./MyModules/encrypt");
//import with object destructuring
//I can pull it just one function
const { encrypt } = require("./MyModules/encrypt");
//log encryption
console.log(encryption);
let text = "Hello World";
const encryptedText = encryption.encrypt(text);
console.log(encryptedText);
const decryptedText = encryption.decrypt(encryptedText);
console.log(decryptedText);

//I can use just encrypt
text = encrypt(text);
console.log(text);
