const { MongoClient } = require("mongodb");
require("dotenv").config();
//get the connection string from the .env file
const CONNECTION_STRING = process.env.CONNECTION_STRING;
// create a new MongoClient
const client = new MongoClient(CONNECTION_STRING);
// connect to the database
try {
  client.connect();
  console.log("Connected to the database");
} catch (e) {
  console.error(e);
}

//lets list the databases
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

listDatabases(client);
//we can also connect to a specific database
//lets connect to the sample_mflix database
const db = client.db("sample_mflix");

//lets list the collections in the sample_mflix database
//This function will list all the collections in the current database
async function listCollections(db) {
  collections = await db.listCollections().toArray();
  console.log("Collections:");
  collections.forEach((collection) => console.log(` - ${collection.name}`));
}

listCollections(db);

//lets check out the movies collection
const movies = db.collection("movies");

// //lets find all the movies
async function findAllMovies() {
  const cursor = movies.find({});
  const moviesArray = await cursor.toArray();
  //filter by year
  //This is a bad idea because we are filtering in the node application. It is better to filter in the database
  //but it is possible
  //const filteredMovies = moviesArray.filter((movie) => movie.year === 1972);
  console.log(moviesArray);
}

findAllMovies();

//It is possible to get all of the movies and then
//filter them in the application, but it is better to
//filter the movies in the database

//lets find a movie
async function findMovie(title) {
  const query = { title: title };
  //find one
  const movie = await movies.findOne(query);
  console.log(movie);
}

findMovie("The Godfather");

//lets find movies by genre and year
async function findMoviesByGenreAndYear(genre, year) {
  const query = { genre: genre, year: year };
  const cursor = movies.find(query);
  const moviesArray = await cursor.toArray();
  console.log(moviesArray);
}

findMoviesByGenreAndYear("Drama", 1972);

//lets insert a movie
async function insertMovie(movie) {
  const result = await movies.insertOne(movie);
  console.log(`New movie created with the following id: ${result.insertedId}`);
}

const newMovie = {
  title: "Elden Ring",
  year: 2022,
  director: "Steven Spielberg",
};

insertMovie(newMovie);

//lets update a movie

async function updateMovie(title, year) {
  const query = { title: title };
  const update = { $set: { year: year } };
  const result = await movies.updateOne(query, update);
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

//updateMovie("Elden Ring", 2020);

//lets delete a movie
async function deleteMovie(title) {
  const query = { title: title };
  const result = await movies.deleteOne(query);
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

deleteMovie("Elden Ring");
