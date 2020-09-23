//  Lets look at how easy it is to start a node server with express.js 
const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);
