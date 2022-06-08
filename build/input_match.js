"use strict";
/********Two implementations of node.js stream */
/********My ideal solution would contain transform stream */
// const nReadlines = require('n-readlines');
// const matchData = new nReadlines('./sample-input.txt');
// function getMatchData(){
// let line;
// let lineNumber = 1;
// while (line = matchData.next()) {
//     console.log(`Line ${lineNumber} has: ${line.toString('ascii')}`);
//     lineNumber++;
// }
// console.log('end of file.');
// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// }
var readline = require('readline');
var fs = require('fs');
//var matchArray = '';
var readable = readline.createInterface({
    input: fs.createReadStream('./src/sample_input.txt')
});
var lineno = 0;
readable.on('line', function (line) {
    lineno++;
    console.log(typeof line);
    const arr = line.toString().replace(/\r\n/g, '\n').split('\n');
    console.log('Line number ' + lineno + ': ' + line);
    //console.log(arr)
    // console.log(typeof arr);
});
