const express = require("express");
const path = require("path");

const server = express();
const PORT = 3000;
const messagesRouter = require("./routes/messages.router");

//we group the routes the belong to /family in one router
const familyRouter = require('./routes/family.router');

server.use(express.json());
server.use('/site', express.static(path.join(__dirname, "public")));
server.use('/family', familyRouter)//go to family.router.js

server.use("/messages", messagesRouter);

server.listen(PORT, function(){
   console.log("listening on port ", PORT)
})