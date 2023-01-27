"use strict";
const answer = document.querySelector('.answerFizzBuzz');
const buttonCheck = document.querySelector('.check');

buttonCheck.addEventListener("click" ,()=>{
    let value = document.getElementById("fizzBuzz").value;
    value = JSON.parse(value);
    answer.innerHTML = `${ value } is ${fizzBuzzKata(value)}` ;
})

Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzBuzzKata = void 0;
function fizzBuzzKata(numArr) {
    const newNumArray = numArr.map(checkFizzBuzz);
    return newNumArray;
}
exports.fizzBuzzKata = fizzBuzzKata;
function checkFizzBuzz(number) {
    switch (true) {
        case (number < 1 || number > 100):
            return 'Please write a number between 1 and 100';
        case (number % 3 == 0 && number % 5 == 0):
            return "fizzbuzz";
        case (number % 3 == 0):
            return "fizz";
        case (number % 5 == 0):
            return "buzz";
        default:
            return number.toString();
    }
}
