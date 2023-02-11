const parser = require('csv-parse');
const fs = require('fs')
const parse = parser.parse;//assign the function parser.parse to variable called parse.

const event_emitter = fs.createReadStream('./kepler_data.csv');

event_emitter//let's subscribe to some events, let's do it by chaining
    .on('data', function EachTimeDataIsHereDo(data) {
        /*
        * EachTimeDataIsHereDo() remains in the liseteners array for the event 'data',
        * until it gets removed
        */

        console.log('hello');
        //console.log(data);
    })
    .on('error', function EachTimeDataIsHereDoErr(err) {//same
        console.log(err);
    })
    .once("data", function OnceWeHaveDataDoThisForOneTime(data) {
        /*
        * OnceWeHaveDataDoThisForOneTime() remains in the listenners array for the event
        * 'data', and the first time we emit the event 'data', it gets removed from the
        * array and after that it gets called and executed so it will be executed once.
        */
        console.log("\njust for one time !!!!\n")
        console.log(data);
        //console.log(this);
    })
    .pipe(parse({
        comment: '#', 
        columns: true
    })) 
    /*
    * 'pipe()' work: ReadableStream.pipe(WriteableStream);
    * 'pipe()' returns a 'Parser' obj, Parser class extends 'stream.Transform' class that exteds 'Duplex' class which extends 'Readable' and also implements 'Writeable'.
    * 'pipe()' returns in this case a "Readable" stream obj (Event Emitter)
    * so the listeners arrays will be independent from the above stream (even_emitter)
    * 'data' after this is parsed 
    * 
    */
    .once('data', function OnceWeHaveDataDoThisForOneTime(data){
      //belongs to the piped stream's listeners arrays
        //data is parsed
        console.log("me after")
        console.log(data);
    })
    .prependOnceListener('data', function OnceWeHaveDataDoThisFirstForOneTime(data) {
        //data is parsed
        console.log(this)
        console.log("Me first !!!! \n")
        console.log(data)
        /*
        * same as .once() but OnceWeHaveDataDoThisFirstForOneTime() will be executed single
        * time, node do this by putting it in the first of the listenners array that 
        * belongs to 'data' event .
        */
    });
