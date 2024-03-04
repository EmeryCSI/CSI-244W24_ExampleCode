const logger = (req, res, next) => {
  console.log("Logging route:", req.path, req.body, new Date().toISOString());
  next();
};

module.exports = logger;
