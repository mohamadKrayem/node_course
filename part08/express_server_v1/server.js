const express = require('express');
const { json, append } = require('express/lib/response');
//console.log(express)
console.log("----------------------------------------------------");
const server = express();
console.log(server);
console.log("----------------------------------------------------");
const data = [
   {
      id: 0,
      name: "Mohamad", 
      DateOfBirth: '30.05.2001'
   }, 
   {
      id:1,
      name: "Raef",
      DateOfBirth: '02.05.2003',
   },
   {
      id:2,
      name: "Solayman", 
      DateOfBirth: '31.08.2005'
   },
   {
      id: 3,
      name: "Alissar", 
      DateOfBirth: '31.08.2005'
   }
];

server.use(function (req, res, next) {
   const dateBeforeNext = Date.now();
   next();
   const dateAfterNext = Date.now() - dateBeforeNext;
   console.log("--------------------------------------------------------------")
   console.log(dateAfterNext)
   console.log("--------------------------------------------------------------")
})

server.get("/", (req, res) => {
   res.status(200).json({
      siteName: "just for test",
      message: "welcome to our website",
   })
});
server.get('/data', (req, res) => {
   res.status(200).json(data);
})
server.get('/data/:id', (req,res) => {
   let id = Number(req.params.id);
   if(id>= data.length) {
      res.status(404).json({
         error: "your data is not found !!!!",
      })
      return 
   }
   res.status(200).json(data[id]);
})

server.use(express.json());//all data after here will be in json format

server.post('/data', (req, res) => {
   if(!req.body.name) {
      res.status(400).json({
         error: "Missing name"
      })
      return
   }
   const inputData = req.body;
   inputData.id = data.length
   data.push(inputData)
   res.status(200).send(data)
})

server.listen(3000, ()=> {
   console.log("start listening on port 3000");
})