"use strict";
// const fs = require("fs");
// const { Transform } = require("stream");
// var readline = require('readline');
// const fileStream= fs.createReadStream("./src/sample_input.txt");
// const transformedData= fs.createWriteStream("./transformedData.txt");
// import { MatchValidator } from "./MatchValidator";
Object.defineProperty(exports, "__esModule", { value: true });
// let match = "Capitola Seahorses 1, Aptos FC 0";
// let validator = new MatchValidator();
// let result = validator.isValid(match);
// // var readable = readline.createInterface({
// //     input: fs.createReadStream('./src/sample_input.txt')
// //   });
// //   var lineno = 0;
// //   readable.on('line', function (line: string) {
// //     lineno++;
// //     console.log(typeof line)
// //     const arr = line.toString().replace(/\r\n/g,'\n').split('\n');
// //     console.log('Line number ' + lineno + ': ' + line);
// //     //console.log(arr)
// // for(i in array) {
// //     console.log(array[i]);
// // }
// //    // console.log(typeof arr);
// //   });
// console.log(result);
// const uppercase = new Transform({
//   transform(chunk, encoding, callback) {
//     //callback(null, chunk.toString().toUpperCase());
//     callback(null, chunk.toString().toUpperCase());
//     //console.log(typeof chunk);
//   },
// });
// //var matchArray = '';
// fileStream.pipe(uppercase).pipe(transformedData);
// var fs = require('fs');
// var readline = require('readline');
// var filename = process.argv[2];
// readline.createInterface({
//     input: fs.createReadStream(filename),
//     terminal: false
// }).on('line', function(line) {
//    console.log('Line: ' + line);
// });
var readline = require('readline');
var fs = require('fs');
const MatchValidator_1 = require("./MatchValidator");
// let match = "San Jose Earthquakes 3, Santa Cruz Slugs 3";
//let validator = new MatchValidator();
//let result = validator.isValid(line);
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
    console.log(line);
    console.log(result);
});
