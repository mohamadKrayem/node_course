const http = require('http');//will return an object
const EventEmiter = require('events');
const celebrity = new EventEmiter();

//first subscriber;
celebrity.on('race', function() {
    console.log('Please come home !!!!')
})
//second subscriber fan;
celebrity.on('race', function(event) {
    if(event == 'win') console.log("Gong")
    else console.log("hard luck")
})

celebrity.emit('race', 'win');

// console.log(http)

const req = http.request('http://www.google.com/',//this line is execute by the OS because it is a network request 

    function first(res) {
        //this callback will be called first because 'first' is the first event 
        //in the I/O callbacks queue;

        res.on('data', function second(data) {
            //this callback will be called second because 'second' is the 
            //second event in the I/O callbacks queue;
            console.log(data);
        });

        res.on('end', function third() {
            //this callback will be called fourth because it pushed to the 
            // I/O callbacks queue right after all the callbacks related to 
            //'data' event finishe their execution;
            console.log("the request is end");
        })
        
        res.on('data', function second1(){
            //This callback will be called third because it get pushed to the 
            //I/O callbacks queue when 'data' is triggered and after 'first' callback 
            //because of the seuquential reading of the code;
            console.log('before the request is end');
        })
        console.log("me second")
    }
);

// console.log(req) //me first

req.end()
console.log("here")