"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchValidator_1 = require("./MatchValidator");
var readline = require('readline');
var fs = require('fs');
// let match = "San Jose Earthquakes 3, Santa Cruz Slugs 3";
//let validator = new MatchValidator();
//let result = validator.isValid(line);
const myInterface = readline.createInterface({
    input: fs.createReadStream('./src/sample_input.txt')
});
myInterface.on('line', function (line) {
    // let match = "Capitola Seahorses 1, Aptos FC 0";
    //const arr = line.toString().replace(/\r\n/g,'\n').split('\n');
    let validator = new MatchValidator_1.MatchValidator();
    let result = validator.isValid(line);
    //console.log(line);
    //console.log(result);
    if (result === true) {
        //const arr = line.toString().replace(/\r\n/g,'\n').split('\n');
        //console.log(arr);
        console.log(arr[1]);
        //TODO create array from line
    }
});
