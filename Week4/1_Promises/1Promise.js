//Callback function
//A callback function is a way to pass a function as a parameter
//to another function
//we took in a callback function
function GetText(callback) {
  //I am going to use whatever function came in
  callback("Hello World");
}

GetText(displayByLine);

function consoleDisplay(text) {
  console.log(text);
}

function displayByLine(text) {
  console.log(text);
  let array = [1, 2, 3];
  array.forEach((number) => {
    console.log(number);
  });
}

//A Promise is just an alternative to a using a callback function
//A Promise will have results, it is either successful (resolve)
//or unsuccessful, call a function reject
//All resolve and reject are is callback function
//Create a new promise
const promise1 = new Promise((resolve, reject) => {
  //some processing occurs
  //if check to see if it was successful
  //read a file from a disk. If it works send
  //the data to the resolve
  resolve("Success");
  //if unable to read
  reject("Failed");
});
//I cannot call promise1 directly
//promise1();
//The way you call a promise is by using .then()
console.log(promise1.then());
//pass a callback function to the resolve.
promise1
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });
