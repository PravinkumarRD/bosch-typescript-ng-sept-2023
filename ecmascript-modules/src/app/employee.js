"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Employee Module Started!');
const person_1 = require("./person");
class Employee extends person_1.default {
    constructor() {
        super();
        console.log('Employee class constructor executed!');
    }
}
exports.default = Employee;
console.log('Employee Module Ended!');
//# sourceMappingURL=employee.js.map