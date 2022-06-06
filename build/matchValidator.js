"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchValidator = void 0;
//regex to match valid data
class matchValidator {
    isValid(s) {
        //match characters and white spaces, single character, comma, characters and whitespaces, single character, end of input
        const matchRegex = /^[a-zA-Z]+(\s+([a-zA-Z]+\s+)+).,\s[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+\s.$/;
        return matchRegex.test(s);
    }
}
exports.matchValidator = matchValidator;
