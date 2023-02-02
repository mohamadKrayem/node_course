const parser = require('csv-parse');
const fs = require('fs');

const parse = parser.parse;

let result = [];

function isHabitable(planet){
    return (
      (planet['koi_disposition'] == 'CONFIRMED')
      &&  (planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11)
      &&  (planet['koi_prad']<1.6)
    ) 
}

fs.createReadStream('./kepler_data.csv')
    .pipe(parse({
        columns: true, 
        comment: '#'
    }))
    .on('data', function EachTimeDataIsHereDo(data) {
        if(isHabitable(data)) {
            console.log(`${data['kepoi_name']} is habitable !!`);
            result.push(data)
        }
    })
    .on('error', function EachTimeErrorIsHereDo(err) {
        console.log(err.message);
    })
    .on('end', function onEndDo() {
        result = result.map(planet => planet['kepoi_name'])
        console.log(result)
    })
