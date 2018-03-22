var obj = 
{
    "first_name": "Serine",
    "last_name": "Sargsyan",
    "first_name": 16,
    "first_name": true
}
var myJSON = JSON.stringify(obj);

var fs = require('fs');

function main(){
   var file  = "obj.json";
   fs.appendFileSync(file, myJSON);
}
main();

