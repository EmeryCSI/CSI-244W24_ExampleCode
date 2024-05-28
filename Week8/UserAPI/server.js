const axios = require("axios");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const PORT = 5001;
//const CONNECTION_STRING = process.env.CONNECTION_STRING;

//console.log(CONNECTION_STRING);

// //connect using mongoose
// //using try/catch so we can log the error if it is not connecting
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.CONNECTION_STRING);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };
// connectDB();

//middleware
//Middleware is just code that runs on every request
app.use(express.json());
app.use(cors());
// This is an endpoint that will send out hello world if we go to /
app.get("/", (req, res) => {
  console.log("Endpoint hit");
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  console.log("Endpoint hit");
  res.send("This is a test");
});
app.post("/test", (req, res) => {
  console.log("Post Endpoint hit");
  res.send(req.body);
  //Talk to you database
});
//routes
app.get("/weather", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://open-weather13.p.rapidapi.com/city/latlon/30.438/-89.1028",
    headers: {
      "X-RapidAPI-Key": "edc1cf53c9msh509f6e4a610f77dp1e03aajsnb5e9e035ff19",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
