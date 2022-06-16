"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchValidator_1 = require("./MatchValidator");
//first step:  validate data -- "garbage in, garbage out"
let matchTest = 'Monterey United 1, Capitola Seahorses';
let validator = new MatchValidator_1.MatchValidator();
let result = validator.isValid(matchTest);
//console.log(result);
var resultTest = "San Jose Earthquakes 3, Santa Cruz Slugs 3".split(",");
//console.log(resultTest);
const str = 'San Jose Earthquakes 3';
const last = str[str.length - 1];
const num = Number(last);
//console.log(typeof num);
var match = {
    firstTeamName: "San Jose Earthquakes",
    firstTeamScore: 3,
    secondTeamName: "Monterey United",
    secondTeamScore: 4,
};
var assignPoints = function (match) {
    //console.log("firstTeamName :"+match.firstTeamName) 
    // console.log("firstTeamScore :"+match.firstTeamScore) 
    // console.log("secondTeamName :"+match.secondTeamName) 
    // console.log("secondTeamScore :"+match.secondTeamScore) 
    var text;
    if (match.firstTeamScore < match.secondTeamScore)
        text = "Monterey United won this match";
    console.log(text);
    var winPoints = 3;
    var tiePoints = 1;
    var lossPoints = 0;
    var rankingPoints;
    //console.log(typeof winPoints);
    if (match.firstTeamScore > match.secondTeamScore) {
        rankingPoints = match.firstTeamScore + winPoints;
        // console.log()
    }
};
assignPoints(match);
// const fs = require("fs");
// const { Transform } = require("stream");
// var readline = require('readline');
// const fileStream= fs.createReadStream("./src/sample_input.txt");
// const transformedData= fs.createWriteStream("./transformedData.txt");
// import { MatchValidator } from "./MatchValidator";
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
// var readline = require('readline');
// var fs = require('fs');
// import { MatchValidator } from "./MatchValidator";
// // let match = "San Jose Earthquakes 3, Santa Cruz Slugs 3";
//  //let validator = new MatchValidator();
//  //let result = validator.isValid(line);
// var myInterface = readline.createInterface({
//   input: fs.createReadStream('./src/sample_input.txt')
// });
// var lineno = 0;
// myInterface.on('line', function (line) {
//    // let match = "Capitola Seahorses 1, Aptos FC 0";
// //const arr = line.toString().replace(/\r\n/g,'\n').split('\n');
// let validator = new MatchValidator();
// let result = validator.isValid(line);
//   lineno++;
//   //console.log(line);
//   //console.log(result);
// });
//import { GetMatchInput } from "./get_match_input";
