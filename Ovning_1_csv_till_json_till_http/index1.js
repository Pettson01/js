
const csvFilePath='./Elevlista1.csv'
const csv=require('csvtojson')
const fs = require('fs')
const http = require('http')

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log("How the file looks in the console:")
    console.log(jsonObj);

    //De två extra parametrarna gör json filen mera läslig, se resultatet
    let data = JSON.stringify(jsonObj, null, 4);
    fs.writeFileSync('student-2.json', data);

    console.log("The file has been saved in this folder...")

})


//Den tillagda koden så Json filen skrivs ut på clientsidan, koden läser filen och lägger den i data, data skrivs sedan ut på
//clientsidan i en och samma lång rad.
http.createServer(function (req, res) {
  fs.readFile('student-2.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
