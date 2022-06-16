import { Validator as StringValidator } from './Validator';

//regex to match valid data

class MatchValidator implements StringValidator {
    isValid(s: string): boolean {
        //match characters and white spaces, single character, comma, characters and whitespaces, single character, end of input
        //const matchRegex = /^[a-zA-Z]+(\s+([a-zA-Z]+\s+)+).,\s[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+\s.$/;
        const matchRegex= /^[a-zA-Z]+(\s+([a-zA-Z]+\s+)+)\d,(\s+([a-zA-Z]+\s+)+)\d$/
        return matchRegex.test(s);
    }
}

export { MatchValidator };