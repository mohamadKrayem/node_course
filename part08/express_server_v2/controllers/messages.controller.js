const path = require("path");
function getMessages(req, res) {
   res.status(200).json({
      message1: "hello world !!!"
   })
}

function getUpdatedMessage(req, res) {
   if(req.params.number == "image") {
      // path handles the generating of the path on any operating system.
      const imgPath = path.join(__dirname, '..', 'public', 'FKWBXaZXwAYsdFO.jpeg');
      console.log(imgPath);
      res.sendFile(imgPath);
      res.status(200);
      return
   }
   res.status(200).json({
      message1: `Your message ${req.params.number}`
   })
}

module.exports = {
   getMessages, 
   getUpdatedMessage,
}