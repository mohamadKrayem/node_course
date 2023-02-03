const testingOBJ = {
    person1: {
        id: 0,
        name: "Mohamad", 
        DateOfBirth: '30.05.2001'
    }, 
    person2: {
        id:1,
        name: "Raef",
        DateOfBirth: '02.05.2003',
    },
    person3: {
        id:2,
        name: "Solayman", 
        DateOfBirth: '31.08.2005'
    },
    person4: {
        id: 3,
        name: "Alissar", 
        DateOfBirth: '31.08.2005'
    }
}
const http = require('http');
const PORT = 4000

const server = http.createServer();
/*
* `http.createServer()` returns an Event Emitter, so server is an `EventEmitter`;
*
*/

server.on('request', requestListener)
    .listen(PORT, listeningListener)

console.log(server.eventNames())//print all of the event names that belongs to 'server'
console.log(server.listeners('request'))//print all of the listeners in the listener array that belongs to the event 'request' (all callback of event 'request')

function requestListener(req, res) {

    if(req.url == '/') {
        res.writeHead( 200, "Successfull request and response !!!!", {
            'Content-type': 'application/json',
        })
        res.end(JSON.stringify(testingOBJ));
    }else if(req.url == '/mohamad') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(testingOBJ.person1));
        res.write(JSON.stringify({
            message: "hello from /mohamad !!!"
        }))
        res.end();
    }else {
        res.statusCode = 404;
        res.end();
    }
}

function listeningListener() {
    console.log("The server starts on port " + PORT)
}