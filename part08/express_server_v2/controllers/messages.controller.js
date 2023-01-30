function getMessages(req, res) {
   res.status(200).json({
      message1: "hello world !!!"
   })
}

function getUpdatedMessage(req, res) {
   res.status(200).json({
      message1: `Your message ${req.params.number}`
   })
}

module.exports = {
   getMessages, 
   getUpdatedMessage,
}