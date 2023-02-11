const express = require("express");
const app = express();

app.get("/", function(req, res){
   res.status(200).send(`route '/' : The process id is ${process.pid}`);
})

app.get("/timer", function(req, res){
   delay(9000);
   res.status(200).send(`route '/timer' : The process id is ${process.pid}`);
})

function delay(time) {
   const start = Date.now();
   while(Date.now() - start < time) {};
}

app.listen(3000);
