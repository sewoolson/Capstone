// 'Import' the http module
const express = require("express");
const dotenv = require("dotenv");
// Initialize the Express application
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4040; // we use || to provide a default value


//Logging Middleware
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
app.use(cors);
app.use(express.json());
app.use(logging);

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
