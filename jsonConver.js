const csv = require('csvtojson')
const fs = require('fs')

const csvFilePath = './indian_food (4).csv'

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
        fs.writeFileSync('jsonData.json', JSON.stringify(jsonObj))
    })