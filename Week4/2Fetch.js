//fetch(location of the data)
//we send a request which gives use a promise
//we get a response inside of the .then()
//which we use to specify what kind of data
//we were expecting
//the .text() method also returns a promises
fetch("text.txt")
  .then((res) => res.text())
  .then((text) => console.log(text));

//lets get some JSON
fetch("Data.json")
  .then((res) => res.json())
  .then((movies) => console.log(movies))
  .catch((error) => console.log(error));

fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((fact) => console.log(fact))
  .catch((error) => console.log(error));

//lets create an instrance of FetchLibrary
let fetchLibrary = new FetchLibrary();
fetchLibrary
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//lets make the data
let data = {
  userid: "10",
  title: "This is the title",
  body: "This is the body",
};
//now we can use our library
fetchLibrary
  .post("https://jsonplaceholder.typicode.com/posts", data)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
