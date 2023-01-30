const express = require("express");
const server = express();
const PORT = 3000;
const messages = require("./controllers/messages.controller");
const familyRouter = require('./routes/family.router');

server.use(express.json());
server.use('/family', familyRouter)

server.get("/messages", messages.getMessages);
server.get("/messages/:number", messages.getUpdatedMessage);

server.listen(PORT, function(){
   console.log("listening on port ", PORT)
})