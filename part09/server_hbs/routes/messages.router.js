const express = require("express");
const messagesController = require('../controllers/messages.controller');

const messagesRouter = express.Router();

messagesRouter.use(justForMessagesRouter);
messagesRouter.get("/", messagesController.getAllMessages);
messagesRouter.get("/:id", messagesController.getSingleMessage);
messagesRouter.post("/", messagesController.postMessage);

function justForMessagesRouter(req, res, next) {
   console.log("This will only run with /messages requetes !!")
   console.log("The ip is "+req.ip);
   next();
}

module.exports = messagesRouter;