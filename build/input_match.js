"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMatchInput = void 0;
var readline = require('readline');
var fs = require('fs');
const MatchValidator_1 = require("./MatchValidator");
// let match = "San Jose Earthquakes 3, Santa Cruz Slugs 3";
//let validator = new MatchValidator();
//let result = validator.isValid(line);
class GetMatchInput {
}
exports.GetMatchInput = GetMatchInput;
var myInterface = readline.createInterface({
    input: fs.createReadStream('./src/sample_input.txt')
});
var lineno = 0;
myInterface.on('line', function (line) {
    // let match = "Capitola Seahorses 1, Aptos FC 0";
    //const arr = line.toString().replace(/\r\n/g,'\n').split('\n');
    let validator = new MatchValidator_1.MatchValidator();
    let result = validator.isValid(line);
    lineno++;
    //console.log(line);
    //console.log(result);
});
