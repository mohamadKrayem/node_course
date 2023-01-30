const express = require("express");
const server = express();
const PORT = 3000;
const messages = require("./controllers/messages.controller");

//we group the routes the belong to /family in one router
const familyRouter = require('./routes/family.router');

server.use(express.json());
server.use('/family', familyRouter)//go to family.router.js

//callbacks are in the controller because they controll the req and res;
server.get("/messages", messages.getMessages);
server.get("/messages/:number", messages.getUpdatedMessage);

server.listen(PORT, function(){
   console.log("listening on port ", PORT)
})