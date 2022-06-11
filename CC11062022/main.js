// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


// function setAlarm(employed, vacation){
//     if(employed === true && vacation === false){
//         return true;
//     }else{
//         return false;
//     }
// }


const setAlarm = (employed, vacation) => employed && !vacation // ? true : false;


console.log(setAlarm(true, true),  false,"Should be false.");
console.log(setAlarm(false,true),  false, "Should be false.");
console.log(setAlarm(true, false), true,"Should be true.");


// CC2

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


// function cockroachSpeed(s) {
//     return Math.floor(s/0.036);
// }

const cockroachSpeed = s => Math.floor(s/0.036);


console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);
