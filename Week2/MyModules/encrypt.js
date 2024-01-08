//This a module
//Modules all for re-usable code
function encrypt(text) {
  return text.split("").reverse().join("");
}
//decrypt using arrow function
const decrypt = (text) => text.split("").reverse().join("");

//To make functions available outside of encrypt.js I must export them
//module.exports = encrypt;
module.exports = {
  encrypt,
  decrypt,
};
