const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const PORT = 5001;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

console.log(CONNECTION_STRING);

//connect using mongoose
//using try/catch so we can log the error if it is not connecting
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

//middleware
//Middleware is just code that runs on every request
app.use(express.json());
app.use(cors());
// This is an endpoint that will send out hello world if we go to /
app.get("/", (req, res) => {
  res.send("Hello World");
});
//routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
