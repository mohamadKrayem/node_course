const express = require("express");
const server = express();
const PORT = 3000;
const family = require('./controllers/family.controller');
const messages = require("./controllers/messages.controller");

server.use(express.json());

//callbacks are in the controller because they controll the req and res;
server.get("/famliy", family.getAllFamily);
server.post("/family", family.postFamilyMember);
server.get("/family/:id", family.getSingleFamilyMember);

server.get("/messages", messages.getMessages);
server.get("/messages/:number", messages.getUpdatedMessage);

server.listen(PORT, function(){
   console.log("listening on port ", PORT)
})