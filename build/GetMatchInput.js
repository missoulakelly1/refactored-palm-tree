"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchValidator_1 = require("./MatchValidator");
__exportStar(require("./MatchValidator"), exports);
function getMatchData() {
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
        //lineno++;
        //console.log(line);
        console.log(result);
    });
}
//export { GetMatchInput };
