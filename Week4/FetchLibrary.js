//I want to make a re-useable library that makes requests
//using fetch
class FetchLibrary {
  //get()
  //get is going to take in a url return a promise
  get(url) {
    //return a promise
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  //post - creates a record
  //has to have some data and the data is passed in the body
  //options object - fetch can take in a 2nd optional parameter
  //if you pass a second paramter it is the options object
  //The options object is where you define the request type
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  //As an exercise
  //Try to complete this fetch library with an UPDATE (PUT) and a DELETE
  //Put is very similar to post except that we need the id of what record we
  //are updating

  //Delete
  //We dont have to pass data in the body but we need to pass the id of the record we are updating.
}
