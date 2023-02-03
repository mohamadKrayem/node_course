const http = require('http');
const PORT = 3000
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

const server = http.createServer(requestListener);
server.listen(PORT, listeningListener);

function requestListener(req, res) {

    res.writeHead( 200, "Successfull request and response !!!!", {
        'Content-type': 'application/json',
    })

    res.end(JSON.stringify(testingOBJ));
    console.log("hello from the server !!!!")
}

function listeningListener() {
    console.log("The server starts on port " + PORT)
}