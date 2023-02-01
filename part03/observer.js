//This is the Obersver Design Pattern;

const EventEmmiter = require('events');

const celebrity = new EventEmmiter()

//Subscribe to celebrity for Observer 1 (fan)
celebrity.on("race", function(result) {
    if(result == "win") {
        console.log("woohoooo!!!!")
    }
})

//Subscribe to celebrity for Observer 2 (opponent)
celebrity.on("race", function(result){
    if(result == "lost") {
        console.log("Woohoo, I'm the best!!!");
    }
})

//Subscribe to celebrity for Observer 3 (his wife)
celebrity.on('race', function() {
    console.log("Please come home !!!")
})

celebrity.emit('race', 'win');

console.log("----------------------------------------------------------------------")

celebrity.emit('race', "lost");

console.log("----------------------------------------------------------------------")
process.on('exit', function(code) {
    if(code == 0) console.log("Everything is fine because the code is ", code);
    else console.log("There is some errors !!!!")
})

