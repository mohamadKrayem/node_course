const myModule = require('./myModule');
console.log(myModule.getObj());

let hello;
setTimeout(function() {
    hello = require('./hello');
}, 1001);
let myModule2;
setTimeout(function() {
    myModule2 = require('./myModule');
    console.log(myModule2.getObj())
}, 3002)
