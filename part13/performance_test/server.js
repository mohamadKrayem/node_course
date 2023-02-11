const express = require("express");
const cluster = require("cluster");
const os = require("os");
const app = express();

app.get("/", function(req, res){
   res.status(200).send("Process example: "+ process.pid);
})

app.get("/timer", function(req, res){
   delay(9000);
   res.status(200).send("Ding ding ! "+ process.pid);
})

function delay(timer) {
   const startingTime = Date.now();
   while(Date.now() - startingTime < timer) {

   } 
}

if(cluster.isMaster) {
   console.log("from master")
   console.log(os.cpus());
   cluster.fork();
}else {
   console.log(`From worker ${process.pid}`);
   app.listen(3000);//try to delete the if else and keep this line and go to check to network in you devTools with 'Disable cache' option checked.
}
