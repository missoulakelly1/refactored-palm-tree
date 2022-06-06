import { matchValidator } from './matchValidator';

let match = 'Monterey United 1, Capitola Seahorses';
let validator = new matchValidator();
let result = validator.isValid(match);

console.log(result);