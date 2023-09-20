"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Customer Module Started!');
const person_1 = require("./person");
class Customer extends person_1.default {
    constructor() {
        super();
        console.log('Customer class constructor executed!');
    }
}
//Singleton pattern
exports.default = new Customer();
console.log('Customer Module Ended!');
//# sourceMappingURL=customer.js.map