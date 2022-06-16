"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchValidator = void 0;
//regex to match valid data
class MatchValidator {
    isValid(s) {
        //match characters and white spaces, single character, comma, characters and whitespaces, single character, end of input
        //const matchRegex = /^[a-zA-Z]+(\s+([a-zA-Z]+\s+)+).,\s[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+\s.$/;
        const matchRegex = /^[a-zA-Z]+(\s+([a-zA-Z]+\s+)+)\d,(\s+([a-zA-Z]+\s+)+)\d$/;
        return matchRegex.test(s);
    }
}
exports.MatchValidator = MatchValidator;
