"use strict";
let anything;
anything = 'salman';
// (anything as string). 
const kgToGram = (value) => {
    if (typeof value === 'string') {
        const result = parseFloat(value) * 1000;
        return `Your Kg to Gram value  is ${result}`;
    }
    if (typeof value === 'number') {
        return value * 1000;
    }
};
let result1 = kgToGram(1); // wrong implementation
console.log(result1);
console.log(typeof result1); // output: number but the problem is we can assign string in this too. 
try {
    console.log("Trying very much");
}
catch (error) {
    // console.log(error.message) // 'error' is of type 'unknown'.ts(18046)
    // solution
    console.log(error.message);
}
