"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matchValidator_1 = require("./matchValidator");
let match = 'Monterey United 1, Capitola Seahorses';
let validator = new matchValidator_1.matchValidator();
let result = validator.isValid(match);
console.log(result);
