import { Validator } from './validator';

//regex to match valid data

class MatchValidator implements Validator {
    isValid(s: string): boolean {
        //match characters and white spaces, single character, comma, characters and whitespaces, single character, end of input
        const matchRegex = /^[a-zA-Z]+(\s+([a-zA-Z]+\s+)+).,\s[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+\s.$/;
        return matchRegex.test(s);
    }
}

export { MatchValidator };