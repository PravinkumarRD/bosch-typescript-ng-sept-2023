console.log('Basic Math Module Started!');

import { square } from "./advance-math";

function addition(num1: number, num2: number): number {
    return num1 + num2;
}
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}
function subtract(num1: number, num2: number): number {
    return num1 - num2;
}
function divide(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(`Square from Basic Math Module is ${square(56)}`);
export { addition, multiply, subtract, divide, square }
console.log('Basic Math Module Ended!');