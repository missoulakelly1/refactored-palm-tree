// import { matchValidator } from './matchValidator';

// let match = 'Monterey United 1, Capitola Seahorses';
// let validator = new matchValidator();
// let result = validator.isValid(match);

//console.log(result);

// var result;
// result = "San Jose Earthquakes 3, Santa Cruz Slugs 3".split(","); 
// console.log(result);

const str = 'San Jose Earthquakes 3';
const last = str[str.length - 1];
const num = Number(last);
console.log(typeof num);