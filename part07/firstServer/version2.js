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
const PORT = 5000

const server = http.createServer();
/*
* `http.createServer()` returns an Event Emitter, so server is an `EventEmitter`;
*
*/

server.on('request', requestListener)
    .listen(PORT, listeningListener)

function requestListener(req, res) {//req is a ReadableStream and res is a WriteableStream so both are EventEmitter

    const urlSplits = req.url.split('/');

    if(urlSplits.length <= 2) {
        if(urlSplits[1] == "") successfullResponse(res);
        else successfullResponseFor2(res, urlSplits, testingOBJ);
    }
    
    else failedResponse(res);
}

function listeningListener() {
    console.log("The server starts on port " + PORT)
}

function successfullResponse(res) {
    successfullResponseHeader(res);
    res.end(JSON.stringify(testingOBJ));
}

function successfullResponseHeader(res) {
    res.writeHeader( 200, "Successfull request and response !!!!", {
        'Content-type': 'application/json',
    })
}

function successfullResponseFor2(res, urlSplits, testingOBJ) {
    successfullResponseHeader(res);
    res.write(JSON.stringify(testingOBJ[urlSplits[1]]))
    res.end();
}

function failedResponse(res){
    res.statusCode = 404;
    res.end()
}