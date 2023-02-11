const http = require("http");

const app = require('./app');
const handlers = require('./methods/handlers')

const PORT = process.env || 3000;
const server=http.createServer(app.server);

server.listen(PORT.port, handlers.listenerHandler.bind(null, PORT.port));