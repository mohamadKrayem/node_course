const express = require("express");
const server = express();
const path = require("path");

const familyRouter = require("./routes/family.router");
const messagesRouter = require("./routes/messages.router");

//we are defining the default view engine that this application uses.
server.set("view engine", 'hbs')
//we are defining the destination of files with extension of the view engine.
server.set("views", path.join(__dirname, "views"))

//we are mounting the files of public on /site. this means that if we want to access file inside public we can call it by site/fileInPublic.
//as an example, you can check how we are calling the style.css inside views/index.hbs.
server.use("/site", express.static(path.join(__dirname, 'public')));
server.use(express.json());
server.get("/", renderHTML)
server.use("/family", familyRouter);
server.use("/messages", messagesRouter);

server.listen(3000, listeningHandler);

function renderHTML(req, res) {
   res.render('index', {
      title: "Server with hbs",
      header1: "Hello",
      paragraph: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad temporibus assumenda et magni, eligendi, eum error placeat sit rerum dolore. ",
   })
}
function listeningHandler(){
   console.log("Listening to the server !!!");
}