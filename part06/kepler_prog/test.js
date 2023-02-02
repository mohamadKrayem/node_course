console.log(require)
console.log('--------------------------------------------------------------')
const parse = require('csv-parse');
console.log(parse)
console.log('--------------------------------------------------------------')
const fs = require('fs')
console.log(fs)
console.log('--------------------------------------------------------------')
const parser = parse.parse({
    delimiter: ':'
})
console.log(parser)
console.log('--------------------------------------------------------------')
const event_emitter = fs.createReadStream('./kepler_data.csv');
console.log(event_emitter)