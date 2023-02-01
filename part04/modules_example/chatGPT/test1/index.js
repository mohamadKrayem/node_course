console.log(require.cache);
let obj = require('./myModule').obj;
console.log("------------------------------------------------------------")
console.log(require.cache);
console.log("------------------------------------------------------------")
obj.property = 'new value';
console.log(obj.property);
console.log(require.cache);
console.log("------------------------------------------------------------")
obj.property = 'new value';
let obj2 = require('./myModule').obj;
console.log(obj2.property); // will log 'new value'
