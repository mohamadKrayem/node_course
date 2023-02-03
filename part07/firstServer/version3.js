const personsOBJ = [
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
]

const http = require('http')
const server = http.createServer();
server.on("request", requestListener)
   .listen(5000, listeningListener);

function requestListener(req, res) {
   const urlSplits = req.url.split('/');
   if(req.method == "GET") {
      getMethodHandler(res, urlSplits, personsOBJ);  
   } else if( req.method == "POST" && urlSplits.length == 2) {
      postMethodHandler(req, res, urlSplits, personsOBJ);
   }

}

function listeningListener() {
   console.log("listening on port " + 5000);
}

function successfullResponseHeader(res) {
   res.writeHeader('200', "Successfull req and res" , {
      'Content-Type': 'application/json'
   })
}

function successfullResponse(res, personsOBJ) {
   successfullResponseHeader(res);
   res.end(JSON.stringify(personsOBJ));
}

function successfullResponseFor2(res, urlSplits, personsOBJ) {
   successfullResponseHeader(res);
   if(urlSplits[1] == "") {
      successfullResponse(res, personsOBJ);
      return
   }
   const person = chooseById(personsOBJ, urlSplits[1]);
   res.end(JSON.stringify(person))
}

function badRequest(res) {
   res.statusCode = 404;
   res.end();
}
// personsOBJ.makkkkp()
function chooseById(personsOBJ, id) {
   console.log(personsOBJ)
   return personsOBJ.find((person)=>{
      return person['id'] == id
   }) 
}

function getMethodHandler(res, urlSplits, personsOBJ){
   if(urlSplits.length == 1) successfullResponse(res, personsOBJ);
   else if(urlSplits.length==2) successfullResponseFor2(res, urlSplits, personsOBJ);
   else badRequest(res)
}

function postMethodHandler(req, res, urlSplits, personsOBJ) {
   if(urlSplits.length == 2 && urlSplits[1] == "person") {
      req.on('data', handlePostedData.bind(null, successfullResponseHeader, res, personsOBJ))
      req.pipe(res)//When req ends, res ends as well; so there is no need for res.end()
   }
}

function handlePostedData(successfullResponseHeader, res, personsOBJ, data) {
   successfullResponseHeader(res, personsOBJ);
   personsOBJ.push(JSON.parse(data));
   console.log(personsOBJ)
}