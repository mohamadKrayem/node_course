const express = require("express");
const planetsRouter = require('./routes/planets/planets.router');
const server = express();//express() is just a listener function for our node http server.

server.use(express.json());
server.use(planetsRouter);

module.exports = {
   server
}