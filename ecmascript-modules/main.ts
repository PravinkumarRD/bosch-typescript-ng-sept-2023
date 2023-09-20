console.log('Main Module Started!');
//import { addition, multiply, divide, subtract } from "./app/basic-math";
import * as MathObj from "./app/basic-math";
import customerObj1 from "./app/customer";
import customerObj2 from "./app/customer";
import Employee from "./app/employee";

console.log(`Addition - ${MathObj.addition(100, 200)}`);
console.log(`Multiply - ${MathObj.multiply(100, 200)}`);

console.log(`Square from Main Module is ${MathObj.square(56)}`);

customerObj1.firstName = "Manisha";
customerObj1.lastName = "K.";
customerObj1.city = "Pune";
console.log(customerObj1.getPersonInfo());
console.log(customerObj2.getPersonInfo());

const e1: Employee = new Employee();
e1.firstName = "Alisha";
e1.lastName = "C.";
e1.city = "Delhi";
console.log(e1.getPersonInfo());
const e2: Employee = new Employee();
e2.firstName = "Manish";
e2.lastName = "Kaushik";
e2.city = "Raipur";
console.log(e2.getPersonInfo());

console.log('Main Module Ended!');