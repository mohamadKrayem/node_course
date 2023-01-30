const express = require("express");

const messages = require("../controllers/messages.controller");

const messagesRouter = express.Router();

//callbacks are in the controller because they controll the req and res;
messagesRouter.get("/", messages.getMessages);
messagesRouter.get("/:number", messages.getUpdatedMessage);

module.exports = messagesRouter;
