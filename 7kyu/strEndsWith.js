// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// function solution(str, ending){
//     if(str.slice(-ending.length) === ending || ending.length < 1) {
//         return true;
//     }else{
//         return false;
//     }
// }

const solution = (str, ending) => str.slice(-ending.length) === ending || ending.length < 1;


console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)