const messagesDB = require("../models/messages.model");

function getAllMessages(req, res) {
   res.status(200).json(messagesDB);
}

function getSingleMessage(req, res) {
   if(!messagesDB[req.params.id]) {
      res.status(404).json({
         error: "Message Not Found !!!"
      })
      return 
   }
   res.status(200).json(messagesDB[req.params.id]);
}

function postMessage(req, res) {
   if(!req.body.message) {
      res.status(400).json({
         error: "Missing message property !!!"
      });
      return 
   }
   messagesDB.push({
      id: messagesDB.length,
      message: req.body.message
   })
   getAllMessages(req, res);
}

module.exports = {
   getAllMessages,
   getSingleMessage,
   postMessage
}
