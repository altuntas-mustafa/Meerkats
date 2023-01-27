"use strict";
const text = document.querySelector('.answerRoman');
const buttonConvert = document.querySelector('.convert');

buttonConvert.addEventListener("click" ,()=>{
    const value = document.getElementById("arabicNumber").value;
    text.innerHTML = `${ value } is ${romanNumeralConverter(value)}` ;
})
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanNumeralConverter = void 0;
function romanNumeralConverter(arabicNumber) {
    if (arabicNumber < 1 || arabicNumber > 3000) {
        return "Please write a number between 1 and 3000";
    }
    if (arabicNumber % 1 != 0) {
        return "Please enter integer number";
    }
    const arabicArray = [...`${arabicNumber}`].map(Number).reverse();
    let romanString = "";
    const romanArray = arabicArray.forEach((item, index) => {
        let [a, b, c] = digitToLetter(index).split(" ");
        romanString = converter(a, b, c, item) + romanString;
    });
    return romanString;
}
exports.romanNumeralConverter = romanNumeralConverter;
function converter(a, b, c, digit) {
    let romanArray = [
        "",
        a,
        a + a,
        a + a + a,
        a + b,
        b,
        b + a,
        b + a + a,
        b + a + a + a,
        a + c,
    ];
    return romanArray[digit];
}
function digitToLetter(romanIndex) {
    let romanArray = ["I V X", "X L C", "C D M", "M M M"];
    return romanArray[romanIndex];
}
