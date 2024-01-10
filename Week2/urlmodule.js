//url module provides us with methods related to urls
//http://anysite.com/index.php?id=10/
const url = require("url");
//parse a url
const parsedUrl = url.parse("http://www.example.com/profile?name=barry");
console.log(parsedUrl);
//the new way to parse a url
const parsedUrl2 = new URL("http://www.example.com/profile?name=barry");
console.log(parsedUrl2);
//we can also create a url string from a javascript object
const myUrl = url.format({
  protocol: "http",
  hostname: "example.com",
  pathname: "/profile",
  query: {
    name: "barry",
  },
});
console.log(myUrl);
