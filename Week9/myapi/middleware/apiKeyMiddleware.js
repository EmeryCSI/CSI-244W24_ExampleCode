// This middleware will take in a request and a response and a next function
// It will check the request headers for an api key
// If the api key is not present or does not match the api key in the .env file
// It will return a 401 status code with a message of "Unauthorized"
// If the api key is present and matches the api key in the .env file
// It will call the next function
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = apiKeyMiddleware;
