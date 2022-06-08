"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matchValidator_1 = require("./matchValidator");
var matchValidator = new matchValidator_1.MatchValidator();
var readline = require('readline');
var fs = require('fs');
var matchArray = '';
var arr = '';
var readable = readline.createInterface({
    input: fs.createReadStream('./src/sample-input.txt')
});
var lineno = 0;
readable.on('line', function (line) {
    lineno++;
    const arr = line.toString().replace(/\r\n/g, '\n').split('\n');
    console.log('Line number ' + lineno + ': ' + line);
    //console.log(arr)
    // console.log(typeof arr);
});
// import { matchValidator } from './matchValidator';
// let match = 'Monterey United 1, Capitola Seahorses';
// let validator = new matchValidator();
// let result = validator.isValid(match);
//console.log(result);
// var result;
// result = "San Jose Earthquakes 3, Santa Cruz Slugs 3".split(","); 
// console.log(result);
// const str = 'San Jose Earthquakes 3';
// const last = str[str.length - 1];
// const num = Number(last);
// console.log(typeof num);
var match = {
    firstTeamName: "San Jose Earthquakes",
    firstTeamScore: 3,
    secondTeamName: "Monterey United",
    secondTeamScore: 4,
};
var assignPoints = function (obj) {
    // console.log("firstTeamName :"+obj.firstTeamName) 
    // console.log("firstTeamScore :"+obj.firstTeamScore) 
    // console.log("secondTeamName :"+obj.secondTeamName) 
    // console.log("secondTeamScore :"+obj.secondTeamScore) 
    // var text;
    // if (match.firstTeamScore < match.secondTeamScore) text = "Monterey United won this match"
    // console.log(text);
    var winPoints = 3;
    var tiePoints = 1;
    var lossPoints = 0;
    var rankingPoints;
    //console.log(typeof winPoints);
    if (match.firstTeamScore > match.secondTeamScore) {
        rankingPoints = match.firstTeamScore + winPoints;
        console.log();
    }
};
assignPoints(match);
