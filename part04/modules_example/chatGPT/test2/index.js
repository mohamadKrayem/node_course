let myModule = require('./myModule');
let obj = myModule.getObj();
obj.property = 'new value';
myModule.setObj(obj);

let obj2 = myModule.getObj();
console.log(obj2.property); // will log 'new value'
