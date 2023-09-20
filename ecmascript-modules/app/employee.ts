console.log('Employee Module Started!');
import Person from "./person";

export default class Employee extends Person{
    constructor() {
        super();
        console.log('Employee class constructor executed!');
    }
}

console.log('Employee Module Ended!');