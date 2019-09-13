
const csvFilePath='./Elevlista.csv'
const csv=require('csvtojson')
const fs = require('fs')

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log("How the file looks in the console:")
    console.log(jsonObj);

    let data = JSON.stringify(jsonObj);
    fs.writeFileSync('student-2.json', data);

    console.log("The file has been saved in this folder...")

})
