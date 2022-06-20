import { MatchValidator } from "./MatchValidator";

var readline = require('readline');
var fs = require('fs');
const myInterface = readline.createInterface({
  input: fs.createReadStream('./src/sample_input.txt')
});



function validateMatchData(line: string) {
 

  myInterface.on('line', function (line: string) {
 
let validator = new MatchValidator();
let result = validator.isValid(line);

if (result === true) {

let matches = line.split(',');
for (let entry of matches ){

  const last = entry[entry.length -1 ];
  Number(last);
  console.log(typeof Number(last));
}
//TODO declare matchresult array of string and number;
let matchResult : 
//console.log(typeof matchArray);

//return matchArray;

}
  


});
}

validateMatchData();


