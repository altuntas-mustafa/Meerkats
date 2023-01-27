"use strict";
const prime = document.querySelector('.answerPrimeFactors');
const buttonCheckPrime = document.querySelector('.checkPrime');
const buttonCheckPrimeFactors = document.querySelector('.checkPrimeFactors');

buttonCheckPrime.addEventListener("click" ,()=>{
    let value = document.getElementById("primeFactor").value;
    prime.innerHTML = `${ value } is ${primeNumber(value)}` ;
})
buttonCheckPrimeFactors.addEventListener("click" ,()=>{
    let value = document.getElementById("primeFactor").value;
    prime.innerHTML = `${ value } is ${primeFactors(value)}` ;
})

Object.defineProperty(exports, "__esModule", { value: true });
exports.primeFactors = exports.primeNumber = void 0;
function primeNumber(number) {
    let check = 0;
    if (number < 2) {
        return 'Please return a number greater than 1';
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            check += 1;
        }
    }
    if (check == 0) {
        return 'Prime Number';
    }
    else {
        return 'Number is not a prime number';
    }
}
exports.primeNumber = primeNumber;
function primeFactors(number) {
    let numberArray = [];
    if (number == 1) {
        return numberArray;
    }
    if (primeNumber(number) == 'Prime Number') {
        numberArray.push(number);
        return numberArray;
    }
    else if (primeNumber(number) == 'Number is not a prime number') {
        // let factorNumber = number;
        for (let i = 2; i <= number; i++) {
            if (number % i == 0) {
                numberArray.push(i);
                number /= i;
                i = 1;
            }
        }
        return numberArray;
    }
    return 'Please write a number greater than 1';
}
exports.primeFactors = primeFactors;
