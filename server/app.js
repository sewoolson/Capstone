// 'Import' the http module
const http = require("http");
const express = require("express");
const dotenv = require("dotenv");

// Initialize the Express application
const app = express();

dotenv.config();


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

// Initialize the http server
const server = http.createServer((request, response) => {
    // Handle the request from http://localhost:4040/status with HTTP GET method
    if (request.url === "/status" && request.method === "GET") {
      // Create the headers for response
      response.writeHead(200, { "Content-Type": "application/json" });
      // Create the response body
      response.write(JSON.stringify({ message: "Service healthy" }));
      // End and return the response
      response.end();
    }
  })
  // Tell the HTTP server to start listening
  .listen(4040);



// Let the humans know I am running and listening on 4040
console.log("Listening on port 4040");
