"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.square = exports.divide = exports.subtract = exports.multiply = exports.addition = void 0;
console.log('Basic Math Module Started!');
const advance_math_1 = require("./advance-math");
Object.defineProperty(exports, "square", { enumerable: true, get: function () { return advance_math_1.square; } });
function addition(num1, num2) {
    return num1 + num2;
}
exports.addition = addition;
function multiply(num1, num2) {
    return num1 * num2;
}
exports.multiply = multiply;
function subtract(num1, num2) {
    return num1 - num2;
}
exports.subtract = subtract;
function divide(num1, num2) {
    return num1 * num2;
}
exports.divide = divide;
console.log(`Square from Basic Math Module is ${(0, advance_math_1.square)(56)}`);
console.log('Basic Math Module Ended!');
//# sourceMappingURL=basic-math.js.map