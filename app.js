//  Lets look at how easy it is to start a node server with express.js
// const http = require('http');

//  This is one new step with express hwere you create an instance of express
const express = require('express');
const app = express();

// middleware
app.use((req, res, next) => {
  console.log('In the first middleware!');
  next(); // Allows the request to continue to next middleware
});

app.use((req, res, next) => {
  console.log('In the second middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

// You can pass app as request handler
// const server = http.createServer(app);

// server.listen(3000);

// or just do this intead...and remove the http require on top
app.listen(3000);
